import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Sider, HeaderView, FooterView } from '../../components';
import './index.less';

const { Content } = Layout;
interface IBasicLayout {
  children: ReactNode;
}
export const Basiclayout: FunctionComponent<IBasicLayout> = ({ children }): JSX.Element => {
  const [colladpsed, toggle] = useState<boolean>(false);
  useEffect(() => {
    toggle(true);
  }, []);
  return (
    <Layout>
      <Sider collapsed={colladpsed} onCollapse={() => toggle(!colladpsed)} loadedCsv />

      <Layout
        style={{
          minHeight: '100vh'
        }}>
        <HeaderView />
        <Content className='content'>{children}</Content>
        <FooterView />
      </Layout>
    </Layout>
  );
};
