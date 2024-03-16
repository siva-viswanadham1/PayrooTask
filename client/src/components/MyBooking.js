import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../redux/loadingSlice';
import { message } from 'antd';
import { bookingByUser,deleteBooking } from '../apicalls/hotels';

const MyBooking = () => {
    const user = useSelector(state => state.users).user;
    const dispatch = useDispatch();
    const [bookingsData,setBookingsData]=useState([]);
    const getBookingData=async()=>{
        try {
            // Show loader
            dispatch(ShowLoading());
            // Call the API
            const response = await bookingByUser({userId:user._id});
            // Hide loaders
            setBookingsData(response.data);
            dispatch(HideLoading());
        }catch (error) {
            setBookingsData(null);
            message.error(error.message);
        }
    }

    useEffect(()=>{
        getBookingData()
    })
    const cancelBooking=async(payload)=>{
      try {
        dispatch(ShowLoading());
        //console.log(movie)
        const response = await deleteBooking({_id:payload})
        if (response.success) {
          message.success(response.message);
          getBookingData()
        }
        dispatch(HideLoading());
      } catch (error) {
        message.error(error.message);
      }
    }


    return (
        <div>
        {bookingsData && bookingsData.length > 0 ? (
          <div className="hotel-container">
            {bookingsData.map(hotel => (
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
                  <div className="price">Booked on- {hotel.date}</div>
                  <div className="price">Hotel Name- {hotel.hotelName}</div>
                  <div className="price">Place- {hotel.location}</div>
                  <button className="book-btn-c" onClick={() => cancelBooking(hotel._id)}>Cancel</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings available</p>
        )}
      </div>
      );
      
}

export default MyBooking