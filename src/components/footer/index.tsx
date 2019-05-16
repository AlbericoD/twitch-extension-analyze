import React, { Fragment, FunctionComponent } from 'react';
import { Layout, Icon } from 'antd';
import './index.less';
interface GlobalFooterProps {
  links?: Array<{
    key?: string;
    title: React.ReactNode;
    href: string;
    blankTarget?: boolean;
  }>;
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
}

const GlobalFooter: FunctionComponent<GlobalFooterProps> = ({ links, copyright }) => {
  return (
    <footer className='globalFooter'>
      {links && (
        <div className='links'>
          {links.map(link => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className='copyright'>{copyright}</div>}
    </footer>
  );
};

const { Footer } = Layout;
export const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Download',
          title: 'Download CSV',
          href: 'https://dev.twitch.tv/dashboard',
          blankTarget: true
        },
        {
          key: 'github',
          title: <Icon type='github' />,
          href: 'https://github.com/AlbericoD/twitch-extension-analyze',
          blankTarget: true
        },
        {
          key: 'Issues',
          title: 'Issues',
          href: 'https://github.com/AlbericoD/twitch-extension-analyze/issues',
          blankTarget: true
        }
      ]}
      copyright={
        <Fragment>
          Extension Analyze <Icon type='copyright' /> 2019
        </Fragment>
      }
    />
  </Footer>
);
