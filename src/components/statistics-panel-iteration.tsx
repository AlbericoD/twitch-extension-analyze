import { Row, Col, Card, Statistic, Divider } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';
import { ITwitchExtensionPrimitiveCSV } from './types';

interface IProps {
  cardCss: CSSProperties;
  statisticCss: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  children: ReactNode;
}
export const StatisticsPanelIteration = ({ cardCss, statisticCss, csv, children }: IProps) => (
  <Row gutter={16}>
    <Col span={12}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Interaction Rate'
          value={csv
            .map((item: ITwitchExtensionPrimitiveCSV) => parseFloat(item['Interaction Rate']))
            .reduce((prev, next) => prev + next, 0)}
          valueStyle={{ color: '#b19dd8' }}
          precision={4}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Col span={12}>
      <Card.Grid style={cardCss}>
        <Statistic
          valueStyle={{ color: '#b19dd8' }}
          title='Minimizations'
          value={csv
            .map((item: ITwitchExtensionPrimitiveCSV) => parseFloat(item.Minimizations))
            .reduce((prev, next) => prev + next, 0)}
          precision={4}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>

    <Divider style={{ background: 'hsla(0,0%,100%,.05)' }} />
    <Col span={24}>{children}</Col>
  </Row>
);
