import React, { NamedExoticComponent, memo } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Brush,
  YAxis,
  Tooltip,
  Legend,
  Area,
  AreaChart
} from 'recharts';
import './index.less';
interface IProps {
  data: any[];
  firtArea: string;
  secondArea: string;
  thirdArea: string;
  fourthArea: string;
}

const Graph: NamedExoticComponent<IProps> = memo(
  ({ data, firtArea, secondArea, thirdArea, fourthArea }) => (
    <div className={'overviewChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <AreaChart width={500} height={400} data={data === null ? [] : data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Brush />
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey={firtArea} stackId='1' stroke='#003f5c' fill='#003f5c' />
            <Area
              type='monotone'
              dataKey={secondArea}
              stackId='1'
              stroke='#7a5195'
              fill='#7a5195'
            />
            <Area type='monotone' dataKey={thirdArea} stackId='1' stroke='#ef5675' fill='#ef5675' />
            <Area
              type='monotone'
              dataKey={fourthArea}
              stackId='1'
              stroke='#ffa600'
              fill='#ffa600'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
);

export default Graph;
