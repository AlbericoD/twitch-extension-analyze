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
import { ITwitchExtensionPrimitiveCSV, IIteraction } from './types';
import { Row, Col } from 'antd';

const makeData = (
  csv: ITwitchExtensionPrimitiveCSV[],
  initialDateIndex: number,
  lastDateIndex: number
): IIteraction[] => {
  let data: IIteraction[] = [];
  csv.filter((item, index) => {
    if (index >= lastDateIndex && index <= initialDateIndex) {
      const install: IIteraction = {
        name: item.Date,
        interactionRate: parseFloat(item['Interaction Rate']),
        minimizations: parseFloat(item['Minimization Rate']),
        unminimizations: parseFloat(item['Unminimization Rate'])
      };
      data.push(install);
      return item;
    }
  });
  data.reverse();
  return data;
};
interface IProps {
  data: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const StatisticIteractionGraph = ({
  data,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Fragment>
    <Row gutter={16}>
      <Col span={12}>
        <ResponsiveContainer width='100%' aspect={1.0 / 0.5}>
          <LineChart data={makeData(data, initialDateIndex, lastDateIndex)} syncId='anyId'>
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
          <AreaChart data={makeData(data, initialDateIndex, lastDateIndex)} syncId='anyId'>
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
          <LineChart data={makeData(data, initialDateIndex, lastDateIndex)} syncId='anyId'>
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
          <ComposedChart data={makeData(data, initialDateIndex, lastDateIndex)}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey='unminimizations' fill='#6441a4' stroke='#8884d8' />
            <Bar dataKey='interactionRate' barSize={20} fill='#392e5c' />
            <Line type='monotone' dataKey='minimizations' stroke='#9a7fcc' />
            <Brush />
            {/* <Scatter dataKey="cnt" fill="red" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  </Fragment>
);
