import { Row, Col, Card, Statistic, Divider } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';
import { ITwitchExtensionPrimitiveCSV } from '../types';

interface IProps {
  cardCss: CSSProperties;
  statisticCss: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  children: ReactNode;
}
export const StatisticsPanelInstall = ({ cardCss, statisticCss, csv, children }: IProps) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Details Page Visits'
          value={csv
            .map(item => parseInt(item['Extension Details Page Visits']))
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
          valueStyle={{ color: '#b19dd8' }}
          title='Uninstalls / Installs'
          value={csv.map(item => parseInt(item.Uninstalls)).reduce((prev, next) => prev + next, 0)}
          suffix={`/ ${csv
            .map(item => parseInt(item.Installs))
            .reduce((prev, next) => prev + next, 0)}`}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Activations'
          value={csv.map(item => parseInt(item.Activations)).reduce((prev, next) => prev + next, 0)}
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
