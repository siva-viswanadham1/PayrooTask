import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../redux/loadingSlice';
import { bookingByDate, getHotels, registerBooking } from '../apicalls/hotels';
import { message } from 'antd';

const Hotels = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const user = useSelector(state => state.users).user;
    const [bookedHotels,setBookedHotels]=useState([]);
    const [avaibleHotels,setAvailableHotels]=useState([]);
    const [flag,setFlag]=useState(0)

    // Handle date change
    const handleDateChange = (event) => {
        setFlag(flag+1)
        const dateString = event.target.value;
        setSelectedDate(dateString);

    };

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            // Show loader
            dispatch(ShowLoading());
            // Call the API
            const response = await getHotels();
            // Hide loaders
            setData(response.data);
            dispatch(HideLoading());
        } catch (error) {
            setData(null);
            message.error(error.message);
        }
    };
    const getBookedHotels=async()=>{
      try {
        // Show loader
        dispatch(ShowLoading());
        // Call the API
        const response = await bookingByDate({date:selectedDate});
        // Hide loaders
        setBookedHotels(response.data)
        dispatch(HideLoading());
      } catch (error) {
        setBookedHotels(null)
        message.error(error.message);
      }
    }

    useEffect(() => {
      const fetchData = async () => {
          await getBookedHotels();
          //await getAvailableHotels();
          getData();
      };
      fetchData();
  }, [flag]);
  useEffect(() => {

    const updateAvailableHotels = () => {
        const temp = [];
        for (let i = 0; i < data.length; i++) {
            let isBooked = false;
            for (let j = 0; j < bookedHotels.length; j++) {
                if (data[i]._id === bookedHotels[j].hotelId) {
                    isBooked = true;
                    break;
                }
            }
            if (!isBooked) {
                temp.push(data[i]);
            }
        }
        setAvailableHotels(temp);
    };
    updateAvailableHotels();
  }, [bookedHotels, data,flag]);

    const bookHotel = async (hotel) => {
      if(selectedDate){
        try {
          const values={
            userId:user._id,
    
            date: selectedDate,
            hotelId: hotel._id,
            hotelName: hotel.name,
            image: hotel.image,
            location:hotel.location
          }
            const res = await registerBooking(values);
            if (res.success) {
                message.success(res.message);
            } else {
                message.error(res.error);
            }
        } catch (error) {
            message.error(error.message);
        }
      }else{
        message.error("select date");
      }
    };

    return (
        <div>
            <h2>Select a Date</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className='date-input'
            />
            <p>Selected Date: {selectedDate}</p>
            <div className="hotel-container">
                {avaibleHotels.map(hotel => (
                    <div key={hotel._id} className="hotel-card">
                        <div>
                            <img
                                src={hotel.image}
                                alt="poster"
                                height="200"
                                width="100%"
                            />
                        </div>
                        <div className="details">
                            <div className="price">Hotel Name- {hotel.name}</div>
                            <div className="price">Place- {hotel.location}</div>
                            <div className="price">Price- Rs.{hotel.price}</div>
                            <button className="book-btn" onClick={() => bookHotel(hotel)}>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
