import { Row, Col, Card, Statistic, Divider, Icon } from 'antd';
import React, { CSSProperties, ReactNode } from 'react';
import { ITwitchExtensionPrimitiveCSV } from '../types';
import { bitsSVG } from '../svg/index';
interface IProps {
  cardCss: CSSProperties;
  statisticCss: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  children: ReactNode;
}

export const StatisticsPanelBits = ({ cardCss, statisticCss, csv, children }: IProps) => (
  <Row gutter={16}>
    <Col span={8}>
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
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Bits Used'
          value={csv
            .map(item => parseInt(item['Bits Used']))
            .reduce((prev, next) => prev + next, 0)}
          valueStyle={{ color: '#b19dd8' }}
          precision={0}
          prefix={<Icon component={bitsSVG} />}
          style={statisticCss}
        />
      </Card.Grid>
    </Col>
    {/* if >= 0 icon = meh: simle */}
    <Col span={8}>
      <Card.Grid style={cardCss}>
        <Statistic
          title='Bits Transactions '
          value={csv
            .map(item => parseInt(item['Bits Transactions']))
            .reduce((prev, next) => prev + next, 0)}
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
