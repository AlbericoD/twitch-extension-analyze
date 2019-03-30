import React, { CSSProperties } from 'react';
import { Card, Statistic, Row, Col, Divider, Icon } from 'antd';
import { StatisticInstall } from './install-statistic';
import { ImportTwitchCSV } from './upload-csv';
import { StatisticBits } from './bits-statistic';
import { IDataBitsStatistic, ITwitchExtensionPrimitiveCSV } from './types';

const gridStyle: CSSProperties = {
  width: '50%',
  textAlign: 'center',
  boxShadow:
    '0 2px 4px -1px rgba(0,0,0,.34),0 2px 2px -2px rgba(0,0,0,.26),0 1px 4px 0 rgba(0,0,0,.28)'
};
const gridStyleStatisc: CSSProperties = {
  width: '100%',
  textAlign: 'center',
  background: '#19171c',
  border: '1px solid hsla(0,0%,100%,.05)',
  boxShadow:
    '0 2px 4px -1px rgba(0,0,0,.34),0 2px 2px -2px rgba(0,0,0,.26),0 1px 4px 0 rgba(0,0,0,.28)'
};
const statisticStyle: CSSProperties = {
  color: '#faf9fa'
};
interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[];
}
export const ContentBox = ({ csv }: IProps): JSX.Element => (
  <Card
    style={{
      margin: 16,
      paddingTop: 10,
      background: '#0f0e11',
      border: '1px solid hsla(0,0%,100%,.09)',
      boxShadow:
        '0 2px 4px -1px hsla(0,0%,100%,.05),0 2px 2px -2px hsla(0,0%,100%,.05),0 1px 4px 0 hsla(0,0%,100%,.05)'
    }}>
    <Card.Grid style={gridStyleStatisc}>
      <Row gutter={16}>
        <Col span={6}>
          <Statistic
            style={statisticStyle}
            title='Unique Interactors Last 7 Days'
            value={csv[0]['Unique Active Channels Last 7 Days']}
            precision={2}
            valueStyle={{ color: '#b19dd8' }}
            prefix={<Icon type='select' />}
          />
        </Col>

        <Col span={6}>
          <Statistic
            style={statisticStyle}
            title='Unique Renderers Last 7 Days'
            value={csv[0]['Unique Renderers Last 7 Days']}
            precision={0}
            valueStyle={{ color: '#b19dd8' }}
            prefix={<Icon type='stock' />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            style={statisticStyle}
            title='Unique Viewers Last 7 Days'
            value={csv[0]['Unique Viewers Last 7 Days']}
            valueStyle={{ color: '#b19dd8' }}
            precision={0}
            prefix={<Icon type='eye' />}
          />
        </Col>
        <Col span={6}>
          <Statistic
            style={statisticStyle}
            title='Unique Mouseenters Last 7 Days'
            value={csv[0]['Unique Mouseenters Last 7 Days']}
            precision={0}
            valueStyle={{ color: '#b19dd8' }}
            prefix={<Icon type='heart' />}
          />
        </Col>
      </Row>
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
