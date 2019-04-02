import React, { Fragment } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
  ComposedChart,
  Bar
} from 'recharts';
import { IIteraction } from '../types';
import { Row, Col } from 'antd';

interface IProps {
  data: IIteraction[];
}
export const StatisticIteractionGraph = ({ data }: IProps): JSX.Element => {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={12}>
          <ResponsiveContainer width='100%' aspect={1.0 / 0.5}>
            <LineChart data={data} syncId='anyId'>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='interactionRate' stroke='#8884d8' fill='#392e5c' />
            </LineChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <ResponsiveContainer width='100%' aspect={1.0 / 0.5}>
            <AreaChart data={data} syncId='anyId'>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area type='monotone' dataKey='minimizations' stroke='#6441a4' fill='#9a7fcc' />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <ResponsiveContainer width='100%' aspect={1.0 / 0.5}>
            <LineChart data={data} syncId='anyId'>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Line type='monotone' dataKey='unminimizations' stroke='#9a7fcc' fill='#6441a4' />
              <Brush />
            </LineChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <ResponsiveContainer width='100%' aspect={1.0 / 0.5}>
            <ComposedChart data={data}>
              <CartesianGrid stroke='#f5f5f5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type='monotone' dataKey='unminimizations' fill='#6441a4' stroke='#8884d8' />
              <Bar dataKey='interactionRate' barSize={20} fill='#392e5c' />
              <Line type='monotone' dataKey='minimizations' stroke='#9a7fcc' />
              <Brush />
            </ComposedChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Fragment>
  );
};
