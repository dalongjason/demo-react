import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'umi';
import { Space, Button, Card } from 'antd';
import request from '@/uilts/request';

const DuseFecth = () => {
  const service = new request();

  const sendGet = useCallback(() => {
    service.getData('https://jsonplaceholder.typicode.com/photos');
  }, []);

  const sendPost = useCallback(() => {
    service.getData('https://jsonplaceholder.typicode.com/photos');
  }, []);

  return (
    <Card
      title={
        <Space wrap>
          <Button onClick={sendGet}>Get请求</Button>
          <Button onClick={sendPost}>Post请求</Button>
        </Space>
      }
    ></Card>
  );
};

export default DuseFecth;
