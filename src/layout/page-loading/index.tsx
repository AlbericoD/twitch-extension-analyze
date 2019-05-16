import React from 'react';
import { Spin } from 'antd';

export const PageLoading = (): JSX.Element => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size='large' />
  </div>
);
