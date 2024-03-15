import React, { useState } from 'react';

import { Tabs,DatePicker } from "antd";
import Hotels from '../components/Hotels';



const Home = () => {
return (

    <div>
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Hotels" key='1'>
          <Hotels />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Bookings' key='2'>
          <div>Bookings</div>
        </Tabs.TabPane>
    </Tabs>
    </div>

  )

}

export default Home