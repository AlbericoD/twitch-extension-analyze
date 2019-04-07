import { Row, Col, Card, Statistic, Divider } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';
import { IChannels } from '../../containers';
interface IProps {
  cardCss: CSSProperties;
  statisticCss: CSSProperties;
  channels: IChannels[];

  lastUpdate: string;
  children: ReactNode;
}
export const StatisticsPanelLive = ({
  cardCss,
  statisticCss,
  channels,
  lastUpdate,
  children
}: IProps) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Total channels'
          value={channels.length}
          valueStyle={{ color: '#b19dd8' }}
          precision={0}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Total view count'
          value={channels
            .map((item: IChannels) => parseInt(item.view_count))
            .reduce((prev, next) => prev + next, 0)}
          valueStyle={{ color: '#b19dd8' }}
          precision={0}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Last update'
          value={lastUpdate}
          valueStyle={{ color: '#b19dd8' }}
          precision={0}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Divider style={{ background: 'hsla(0,0%,100%,.05)' }} />
    <Col span={24}>{children}</Col>
  </Row>
);
