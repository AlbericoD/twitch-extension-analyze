import React, { NamedExoticComponent, memo } from 'react';
import {
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Brush,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Line,
  Bar
} from 'recharts';
import './index.less';
interface IProps {
  data: any[];
  area: string;
  line: string;
  firstBar: string;
  secondBar: string;
}

const Graph: NamedExoticComponent<IProps> = memo(({ data, area, firstBar, secondBar, line }) => (
  <div className={'overviewChart'}>
    <div className={'chartContent'}>
      <ResponsiveContainer>
        <ComposedChart data={data === null ? [] : data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <Brush />
          <YAxis yAxisId='left' orientation='left' stroke='#8884d8' />
          <YAxis yAxisId='right' orientation='right' stroke='#45c1e1' />
          <Tooltip />
          <Legend />
          <Area yAxisId='left' type='monotone' dataKey={area} fill='#8884d8' stroke='#9a7ecc' />
          <Bar yAxisId='left' dataKey={firstBar} barSize={20} stroke='#be6eed' fill='#be6eed' />
          <Bar yAxisId='right' dataKey={secondBar} barSize={20} stroke='#45c1e1' fill='#45c1e1' />
          <Line
            yAxisId='left'
            type='monotone'
            dataKey={line}
            legendType='star'
            stroke='#fdc430'
            fill='#fdc430'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
));

export default Graph;
