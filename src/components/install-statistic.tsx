import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ITwitchExtensionPrimitiveCSV, IDataInstalls } from './types';

const makeData = (csv: ITwitchExtensionPrimitiveCSV[]): IDataInstalls[] => {
  let data: IDataInstalls[] = [];
  csv.filter((item, index) => {
    if (index >= 0 && index <= 6) {
      const install: IDataInstalls = {
        name: item.Date,
        activations: parseInt(item.Activations),
        install: parseInt(item.Installs),
        uninstalls: parseInt(item.Uninstalls)
      };
      data.push(install);
      return item;
    }
  });
  return data;
};
interface IProps {
  data: ITwitchExtensionPrimitiveCSV[];
}
export const StatisticInstall = ({ data }: IProps): JSX.Element => (
  <ResponsiveContainer width='100%' aspect={2.0 / 1.0}>
    <BarChart data={makeData(data)}>
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
);
