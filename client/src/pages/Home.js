import React, { useState } from 'react';

import { Tabs,DatePicker } from "antd";
import Hotels from '../components/Hotels';
import MyBooking from '../components/MyBooking';



const Home = () => {
return (

    <div>
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Hotels" key='1'>
          <Hotels />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Bookings' key='2'>
          <MyBooking />
        </Tabs.TabPane>
    </Tabs>
    </div>

  )

}

export default Home