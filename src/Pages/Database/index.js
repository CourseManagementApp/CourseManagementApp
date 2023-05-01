import React from 'react'
import ReactDOM from 'react-dom'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import DatabaseTable from './DatabaseView';

function Database() {



  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Database</Typography.Title>
      <DatabaseTable/>
      </Space>
  );
}
export default Database;
