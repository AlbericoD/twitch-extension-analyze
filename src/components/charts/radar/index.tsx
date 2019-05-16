import React, { NamedExoticComponent, memo } from 'react';
import {
  ResponsiveContainer,
  Brush,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  Tooltip,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import './index.less';

interface RadarProps {
  name: string;
  value: string;
}
interface IProps {
  data: any[];
  radarA: RadarProps;
  radarB: RadarProps;
  radarC: RadarProps;
  radarD: RadarProps;
  domains: string;
}

const Graph: NamedExoticComponent<IProps> = memo(
  ({ data, domains, radarA, radarB, radarC, radarD }) => (
    <div className={'overviewChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={domains} />
            <PolarRadiusAxis angle={30} />
            //@ts-ignore
            <Radar
              name={radarA.name}
              dataKey={radarA.value}
              fill='#003f5c'
              stroke='#003f5c'
              fillOpacity={0.2}
            />
            //@ts-ignore
            <Radar
              name={radarB.name}
              dataKey={radarB.value}
              stroke='#7a5195'
              fill='#7a5195'
              fillOpacity={0.2}
            />
            //@ts-ignore
            <Radar
              name={radarC.name}
              dataKey={radarC.value}
              stroke='#ef5675'
              fill='#ef5675'
              fillOpacity={0.2}
            />
            //@ts-ignore
            <Radar
              name={radarD.name}
              dataKey={radarD.value}
              stroke='#ffa600'
              fill='#ffa600'
              fillOpacity={0.2}
            />
            <Legend />
            <Tooltip />
            <Brush />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
);

export default Graph;
