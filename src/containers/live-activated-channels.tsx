import React, { FunctionComponent, useState, CSSProperties } from 'react';
import { Card } from 'antd';
import { useAsyncEffect } from '../utils';
import { ChannelsList } from '../components';
import { StatisticsPanelLive } from '../components/statistics-panel';
import moment from 'moment';
interface IProps {
  clientID: string;
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
}
export interface IChannels {
  id: string;
  username: string;
  game: string;
  title: string;
  view_count: string;
}

const getLiveChannels = (clientID: string): Promise<IChannels[]> => {
  const headers = new Headers({
    'Client-ID': clientID
  });
  const uri = `https://api.twitch.tv/extensions/${clientID}/live_activated_channels`;
  return fetch(uri, { headers })
    .then((res: Response) => {
      if (res.ok) return res;
      throw new Error(res.statusText);
    })
    .then(res => res.json())
    .then((data: { channels: IChannels[] }) => data.channels)
    .catch(err => {
      console.log(err.message);
      throw new Error('Err to get streamer data');
    });
};
const addkey = (data: IChannels[]): IChannels[] =>
  data.map((item: IChannels) => {
    return { ...item, key: item.id };
  });

export const LiveActivatedChannelsBox: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const [data, setState] = useState<IChannels[]>([]);
  useAsyncEffect(async () => {
    try {
      const channels = await getLiveChannels(props.clientID);
      setState(channels);
    } catch (error) {
      console.error(error);
    }
  }, [props.clientID]);

  return (
    <Card style={props.graphCardStyle}>
      <Card.Grid style={{ width: '100%', padding: 3 }}>
        <StatisticsPanelLive
          cardCss={props.gridStyleStatisc}
          statisticCss={props.statisticStyle}
          lastUpdate={moment().format('MMMM Do YYYY, h:mm:ss a')}
          channels={data}>
          <ChannelsList data={addkey(data)} />
        </StatisticsPanelLive>
      </Card.Grid>
    </Card>
  );
};
