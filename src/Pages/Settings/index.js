import React from 'react'
import ReactDOM from 'react-dom'
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import JobBoard from "./AdvancedSettingsPane"

function Settings() {
  

  return (
    <div>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Settings</Typography.Title>
    </Space>
    <JobBoard/>
    </div>
  );
}
export default Settings;
