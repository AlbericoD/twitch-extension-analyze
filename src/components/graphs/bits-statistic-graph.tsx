import React, { Fragment } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush
} from 'recharts';

import { IDataBitsStatistic } from '../types';

interface IProps {
  data: IDataBitsStatistic[];
}
export const StatisticBitsGraph = ({ data }: IProps) => (
  <Fragment>
    <ResponsiveContainer width='100%' aspect={2.0 / 1.0}>
      <ComposedChart data={data}>
        <Brush />
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type='monotone' dataKey='USD' fill='#392e5c' stroke='#8884d8' />
        <Bar dataKey='transactions' barSize={20} fill='#6441a4' />
        <Line type='monotone' dataKey='bitsUsed' stroke='#9a7fcc' />
      </ComposedChart>
    </ResponsiveContainer>
  </Fragment>
);
