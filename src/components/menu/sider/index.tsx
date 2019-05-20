import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.less';
interface IProps {
  collapsed: boolean;

  onCollapse: (event: any) => void;
  loadedCsv: boolean;
}
interface IOptions {
  key: string;
  icon: string;
  name: string;
  disable: boolean;
}
const options: IOptions[] = [
  {
    key: '/',
    icon: 'upload',
    name: 'Upload CSV',
    disable: false
  },
  {
    key: 'overview',
    icon: 'dashboard',
    name: 'Overview',
    disable: false
  },
  {
    key: 'monetization',
    icon: 'line-chart',
    name: 'Monetization Graph',
    disable: false
  },
  {
    key: 'iteraction',
    icon: 'area-chart',
    name: 'Iteration Graph',
    disable: false
  },
  {
    key: 'build',
    icon: 'build',
    name: 'Manual Build Graph ',
    disable: false
  },
  {
    key: 'activated',
    icon: 'table',
    name: 'Live Activated Channels',
    disable: false
  }
];

const Linkmenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['upload-csv']}
      selectedKeys={[
        location.pathname === '/' ? location.pathname : location.pathname.replace('/', '')
      ]}>
      {options.map(option => (
        <Menu.Item key={option.key} disabled={option.disable}>
          <Icon type={option.icon} />
          <span>{option.name}</span>
          <Link to={option.key} />
        </Menu.Item>
      ))}
    </Menu>
  );
});
export const Sider = ({ collapsed, onCollapse }: IProps): JSX.Element => (
  <Layout.Sider
    collapsible
    collapsed={collapsed}
    onCollapse={onCollapse}
    breakpoint='lg'
    width={256}
    className={'sider'}
    theme={'dark'}>
    <div className='logo' id='logo'>
      <a href='https://github.com/AlbericoD/twitch-extension-analyze' target='__blank'>
        <Icon type='github' style={{ color: '#fff', fontSize: '1.5em', margin: '5px 6px' }} />
      </a>
    </div>

    <Linkmenu />
  </Layout.Sider>
);
