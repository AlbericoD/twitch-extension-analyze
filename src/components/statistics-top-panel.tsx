import React, { CSSProperties } from 'react';
import { Row, Col, Icon, Statistic } from 'antd';
import { IStatistic, ITwitchExtensionPrimitiveCSV } from './types';

interface IProps {
  css: CSSProperties;
  value: ITwitchExtensionPrimitiveCSV;
}

const statisticsPanel: IStatistic[] = [
  { title: 'Unique Active Channels Last 7 Days', precision: 0, icon: 'select' },
  { title: 'Unique Renderers Last 7 Days', precision: 0, icon: 'stock' },
  { title: 'Unique Viewers Last 7 Days', precision: 0, icon: 'eye' },
  { title: 'Unique Mouseenters Last 7 Days', precision: 0, icon: 'heart' }
];

export const StatisticsTopPanel = ({ css, value }: IProps): JSX.Element => (
  <Row gutter={16}>
    {statisticsPanel.map((item: IStatistic, index) => (
      <Col span={6} key={index}>
        <Statistic
          style={css}
          title={item.title}
          value={value[item.title]}
          valueStyle={{ color: '#b19dd8' }}
          precision={0}
          prefix={<Icon type={item.icon} />}
        />
      </Col>
    ))}
  </Row>
);
