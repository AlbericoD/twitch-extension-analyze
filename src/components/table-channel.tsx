import React from 'react';
import { Table, Icon } from 'antd';
import { IChannels } from '../containers';
import { newTabLink } from './svg';
const { Column } = Table;

interface IProps {
  data: IChannels[];
}

export const ChannelsList = ({ data }: IProps): JSX.Element => (
  <>
    <Table dataSource={data} loading={data.length == 0} pagination={{ pageSize: 8 }}>
      <Column
        title='Name'
        dataIndex='username'
        key='username'
        sorter={(a: IChannels, b: IChannels) => {
          if (a.username.toLocaleLowerCase() < b.username.toLocaleLowerCase()) return -1;
          else if (a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase()) return 1;
          return 0;
        }}
      />
      <Column
        title='Game'
        dataIndex='game'
        key='game'
        sorter={(a: IChannels, b: IChannels) => {
          if (a.game.toLocaleLowerCase() < b.game.toLocaleLowerCase()) return -1;
          else if (a.game.toLocaleLowerCase() > b.game.toLocaleLowerCase()) return 1;
          return 0;
        }}
      />
      <Column title='Title' dataIndex='title' key='title' />
      <Column
        title='View Count'
        dataIndex='view_count'
        key='view_count'
        defaultSortOrder='descend'
        sorter={(a: IChannels, b: IChannels) => parseInt(a.view_count) - parseInt(b.view_count)}
      />

      <Column
        title='Live'
        key='action'
        render={(record: IChannels) => (
          <span>
            <a href={`https://www.twitch.tv/${record.username}`} target='__blank'>
              <Icon component={newTabLink} />
            </a>
          </span>
        )}
      />
    </Table>
  </>
);
