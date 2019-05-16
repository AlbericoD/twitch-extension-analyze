import React, { NamedExoticComponent, memo } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Brush,
  YAxis,
  Tooltip,
  Line,
  Legend,
  LineChart
} from 'recharts';
import './index.less';
interface IProps {
  data: any[];
  firstLineA: string;
  secondLineA: string;
  thirdLineA: string;
  firstLineB: string;
  secondLineB: string;
  thirdLineB: string;
}

const Graph: NamedExoticComponent<IProps> = memo(
  ({ data, firstLineA, secondLineA, thirdLineA, firstLineB, secondLineB, thirdLineB }) => (
    <div className={'lineChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <LineChart data={data === null ? [] : data} syncId='anyId'>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Brush />
            <Legend />
            <Line type='monotone' dataKey={firstLineA} stroke='#003f5c' fill='#003f5c' />
            <Line type='monotone' dataKey={secondLineA} stroke='#ffa600' fill='#ffa600' />
            <Line type='monotone' dataKey={thirdLineA} stroke='#dd5182' fill='#dd5182' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <LineChart data={data === null ? [] : data} syncId='anyId'>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Brush />
            <Legend />
            <Line type='monotone' dataKey={firstLineB} stroke='#444e86' fill='#444e86' />
            <Line type='monotone' dataKey={secondLineB} stroke='#955196' fill='#955196' />
            <Line type='monotone' dataKey={thirdLineB} stroke='#ff6e54' fill='#ff6e54' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
);

export default Graph;
