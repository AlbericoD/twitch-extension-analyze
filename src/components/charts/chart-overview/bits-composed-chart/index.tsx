import React, { NamedExoticComponent, memo } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ComposedChart,
  Brush,
  Line
} from 'recharts';
import { AppState, IGraphBits } from '../../../../store';
import { connect } from 'react-redux';
import '../composed-chart/index.less';
import { Card } from 'antd';
interface IMapStateToProps {
  data: IGraphBits[] | null;
}

const Graph: NamedExoticComponent<IMapStateToProps> = memo(({ data }) => (
  <Card>
    <div className={'overviewChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <ComposedChart data={data === null ? [] : data}>
            <CartesianGrid strokeDasharray='3 3' />
            <Brush />
            <XAxis dataKey='date' />
            <YAxis yAxisId='left' orientation='left' stroke='#8884d8' />
            <YAxis yAxisId='right' orientation='right' stroke='#45c1e1' />
            <Tooltip />
            <Legend />
            <Bar yAxisId='left' dataKey='bitsUsedPerUser' fill='#8884d8' />
            <Bar yAxisId='right' dataKey='bitsTransactions' fill='#45c1e1' />
            <Line yAxisId='left' type='monotone' dataKey='bitsUsed' fill='#fff' stroke='#be6eed' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  </Card>
));

const mapStateToProps = (state: AppState): IMapStateToProps => ({
  data: state.overview.data.bits
});

const GraphBox = connect(
  mapStateToProps,
  null
)(Graph);

export default memo(() => <GraphBox />);
