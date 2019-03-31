import React, { Fragment } from 'react';
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

const makeData = (
  csv: ITwitchExtensionPrimitiveCSV[],
  initialDateIndex: number,
  lastDateIndex: number
): IDataInstalls[] => {
  let data: IDataInstalls[] = [];
  csv.filter((item, index) => {
    if (index >= lastDateIndex && index <= initialDateIndex) {
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
  data.reverse();
  return data;
};
interface IProps {
  data: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const StatisticInstallGraph = ({
  data,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Fragment>
    <ResponsiveContainer width='100%' aspect={2.0 / 1.0}>
      <BarChart data={makeData(data, initialDateIndex, lastDateIndex)}>
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
