import React, { PureComponent } from 'react';
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
  ResponsiveContainer
} from 'recharts';

import { IDataBitsStatistic, ITwitchExtensionPrimitiveCSV } from './types';

const makeData = (csv: ITwitchExtensionPrimitiveCSV[]): IDataBitsStatistic[] => {
  let data: IDataBitsStatistic[] = [];
  csv.filter((item, index) => {
    if (index >= 0 && index <= 6) {
      const bits: IDataBitsStatistic = {
        name: item.Date,
        USD: parseFloat(item['Bits Revenue USD']),
        bitsUsed: parseFloat(item['Bits Used']),
        transactions: parseFloat(item['Bits Transactions'])
      };
      data.push(bits);
      return bits;
    }
  });
  return data;
};

interface IProps {
  data: ITwitchExtensionPrimitiveCSV[];
}
export const StatisticBits = ({ data }: IProps) => (
  <ResponsiveContainer width='100%' aspect={2.0 / 1.0}>
    <ComposedChart data={makeData(data)}>
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
);
