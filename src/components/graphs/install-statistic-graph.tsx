import React, { Fragment } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush
} from 'recharts';
import { IDataInstalls } from '../types';

interface IProps {
  data: IDataInstalls[];
}
export const StatisticInstallGraph = ({ data }: IProps): JSX.Element => (
  <Fragment>
    <ResponsiveContainer width='100%' aspect={2.0 / 1.0}>
      <BarChart data={data}>
        <Brush />
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='install' fill='#6441a4' />
        <Bar dataKey='uninstalls' fill='#392e5c' />
        <Bar dataKey='activations' fill='#9a7fcc' />
      </BarChart>
    </ResponsiveContainer>
  </Fragment>
);
