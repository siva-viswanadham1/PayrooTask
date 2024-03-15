import React from 'react'
import { Tabs } from "antd";
import PageTitle from '../../components/PageTitle';

const profile = () => {
  return (
    <div>        
    <PageTitle title='profile'/>
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key='1'>
            <div>Bookings</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab='ADD Theatres' key='2'>
          <div>Theaters</div>
        </Tabs.TabPane>
    </Tabs></div>
  )
}

export default profile