import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import JobBoard from './BoardView'
function AuthPage() {


  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Login</Typography.Title>
        <JobBoard></JobBoard>
    </Space>
  );
}
export default AuthPage;
