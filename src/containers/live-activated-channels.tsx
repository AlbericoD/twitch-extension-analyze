import React, { lazy, Suspense, memo, NamedExoticComponent, useState } from 'react';
import { Card, Skeleton } from 'antd';
import { useAsyncEffect } from '../utils';
import { ChannelsList, ITwitchExtensionPrimitiveCSV } from '../components';
import { AppState } from '../store';
import { connect } from 'react-redux';
const uri =
  'https://api.twitch.tv/extensions/hecb122wgtrzumrv9ywwjn7wg6nglq/live_activated_channels';

const TopRow = lazy(() => import('../components/top-row/live-actived-channels'));
interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[] | null;
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
  return fetch(uri, { headers })
    .then((res: Response) => {
      if (res.ok) return res;
      throw new Error(res.statusText);
    })
    .then(res => res.json())
    .then((data: { channels: IChannels[] }) => data.channels)
    .catch(err => {
      console.error(err);
      throw new Error('Err to get streamer data');
    });
};
const addkey = (data: IChannels[]): IChannels[] =>
  data.map((item: IChannels) => {
    return { ...item, key: item.id };
  });

const LiveActivatedChannels: NamedExoticComponent<IProps> = memo(
  (props): JSX.Element => {
    const [data, setState] = useState<IChannels[]>([]);
    useAsyncEffect(async () => {
      try {
        if (props.csv !== null && props.csv.length) {
          const channels = await getLiveChannels(props.csv[0]['Extension Client ID']);
          setState(channels);
        }
      } catch (error) {
        console.error(error);
      }
    }, [props.csv]);

    return (
      <>
        <Suspense fallback={<Skeleton active />}>
          <TopRow
            totalChannels={data.length}
            totalViewCount={data
              .map((item: IChannels) => parseInt(item.view_count))
              .reduce((prev, next) => prev + next, 0)}
          />
        </Suspense>
        <Card bordered={true} bodyStyle={{ padding: 0 }} loading={!data.length}>
          <ChannelsList data={addkey(data)} />
        </Card>
      </>
    );
  }
);

const mapStateToProps = (state: AppState): IProps => ({
  csv: state.csv.data
});
const LiveActivatedChannelsBox = connect(
  mapStateToProps,
  null
)(LiveActivatedChannels);

export default memo(() => <LiveActivatedChannelsBox />);
