import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import './index.less';

const { Header } = Layout;
const TopNavHeader = lazy(() => import('../menu/top-nav-header'));
export const HeaderView = () => {
  return (
    <Header style={{ padding: 0, width: '100%', zIndex: 2 }} className={'fixedHeader'}>
      <Suspense fallback={null}>
        <TopNavHeader />
      </Suspense>
    </Header>
  );
};
