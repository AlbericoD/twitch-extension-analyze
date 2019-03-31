import React from 'react';
import { Card, Statistic, Row, Col, Divider, Icon } from 'antd';
import { StatisticsTopPanel } from './statistics-top-panel';
import { StatisticInstall } from './install-statistic';
import { StatisticBits } from './bits-statistic';
import { ITwitchExtensionPrimitiveCSV } from './types';
import { cardBody, statisticStyle, gridStyle, gridStyleStatisc } from './style';

interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[];
}
export const ContentBox = ({ csv }: IProps): JSX.Element => (
  <Card style={cardBody}>
    <Card.Grid style={gridStyleStatisc}>
      <StatisticsTopPanel css={statisticStyle} value={csv[0]} />
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <Row gutter={16}>
        <Col span={12}>
          <Card.Grid style={gridStyleStatisc}>
            <Statistic
              title='Activations (Total)'
              value={csv
                .map(item => parseInt(item.Activations))
                .reduce((prev, next) => prev + next, 0)}
              valueStyle={{ color: '#b19dd8' }}
              precision={0}
              style={statisticStyle}
            />
          </Card.Grid>
        </Col>
        <Col span={12}>
          <Card.Grid style={gridStyleStatisc}>
            <Statistic
              valueStyle={{ color: '#b19dd8' }}
              title='Uninstalls (Total)'
              value={csv
                .map(item => parseInt(item.Uninstalls))
                .reduce((prev, next) => prev + next, 0)}
              suffix={`/ ${csv
                .map(item => parseInt(item.Installs))
                .reduce((prev, next) => prev + next, 0)}`}
              style={statisticStyle}
            />
          </Card.Grid>
        </Col>

        <Divider style={{ background: 'hsla(0,0%,100%,.05)' }} />
        <Col span={24}>
          <StatisticInstall data={csv} />
        </Col>
      </Row>
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <Row gutter={16}>
        <Col span={12}>
          <Card.Grid style={gridStyleStatisc}>
            <Statistic
              title='Bits Revenue (USD)'
              value={csv
                .map(item => parseFloat(item['Bits Revenue USD']))
                .reduce((prev, next) => prev + next, 0)}
              prefix={<Icon type='dollar' />}
              precision={2}
              valueStyle={{ color: '#b19dd8' }}
              style={statisticStyle}
            />
          </Card.Grid>
        </Col>
        <Col span={12}>
          <Card.Grid style={gridStyleStatisc}>
            <Statistic
              title='Bits Used (BITS)'
              value={csv
                .map(item => parseInt(item['Bits Used']))
                .reduce((prev, next) => prev + next, 0)}
              valueStyle={{ color: '#b19dd8' }}
              precision={2}
              prefix={<Icon type='like' />}
              style={statisticStyle}
            />
          </Card.Grid>
        </Col>
        <Divider style={{ background: 'hsla(0,0%,100%,.05)' }} />
        <Col span={24}>
          <StatisticBits data={csv} />
        </Col>
      </Row>
    </Card.Grid>
  </Card>
);
