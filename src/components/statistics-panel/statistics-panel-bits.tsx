import { Row, Col, Card, Statistic, Divider, Icon } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';
import { ITwitchExtensionPrimitiveCSV } from '../types';

interface IProps {
  cardCss: CSSProperties;
  statisticCss: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  children: ReactNode;
}
export const StatisticsPanelBits = ({ cardCss, statisticCss, csv, children }: IProps) => (
  <Row gutter={16}>
    <Col span={12}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Bits Revenue (USD)'
          value={csv
            .map(item => parseFloat(item['Bits Revenue USD']))
            .reduce((prev, next) => prev + next, 0)}
          prefix={<Icon type='dollar' />}
          precision={2}
          valueStyle={{ color: '#b19dd8' }}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Col span={12}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Bits Used (BITS)'
          value={csv
            .map(item => parseInt(item['Bits Used']))
            .reduce((prev, next) => prev + next, 0)}
          valueStyle={{ color: '#b19dd8' }}
          precision={2}
          prefix={<Icon type='like' />}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Divider style={{ background: 'hsla(0,0%,100%,.05)' }} />
    <Col span={24}>{children}</Col>
  </Row>
);
