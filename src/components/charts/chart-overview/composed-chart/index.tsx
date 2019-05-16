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
import { AppState, IGraph } from '../../../../store';
import { connect } from 'react-redux';
import './index.less';
interface IMapStateToProps {
  data: IGraph[] | null;
}

const Graph: NamedExoticComponent<IMapStateToProps> = memo(({ data }) => (
  <div className={'overviewChart'}>
    <div className={'chartContent'}>
      <ResponsiveContainer>
        <ComposedChart data={data === null ? [] : data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <Brush />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='uniquePageVisits' fill='#8884d8' stroke='#9a7ecc' />

          <Line
            type='monotone'
            dataKey='activations'
            legendType='star'
            stroke='#45c1e1'
            fill='#fff'
          />

          <Bar dataKey='installs' barSize={20} stroke='#be6eed' fill='#be6eed' />
          <Bar dataKey='uninstalls' barSize={20} stroke='#8365bf' fill='#8365bf' />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
));

const mapStateToProps = (state: AppState): IMapStateToProps => ({
  data: state.overview.data.installs
});

const GraphBox = connect(
  mapStateToProps,
  null
)(Graph);

export default memo(() => <GraphBox />);
