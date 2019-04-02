import React, { ReactNode } from 'react';
import { Menu, PageHeader } from 'antd';

interface IProps {
  name: string;
  children: ReactNode;
}
export const Top = ({ name, children }: IProps): JSX.Element => (
  <Menu theme='light' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
    <Menu.Item key='0'>
      <PageHeader title='Extension: ' subTitle={name} />
    </Menu.Item>
    <Menu.Item key='2'>{children}</Menu.Item>
  </Menu>
);
