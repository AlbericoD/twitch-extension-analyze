import React, { memo, NamedExoticComponent, FunctionComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import '../index.less';

interface IData {
  date: string;
  value: number | string;
}
interface IMiniArea {
  data: IData[];
}

interface ICustomToolTip {
  active: boolean;
  payload: any;
}

const CustomTooltip: FunctionComponent<ICustomToolTip> = ({ active, payload }) => {
  if (active) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${payload[0].payload.date} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
export const MiniArea: NamedExoticComponent<IMiniArea> = memo(({ data }) => {
  return (
    <div className={'miniChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            //@ts-ignore
            <Tooltip content={props => <CustomTooltip {...props} />} />
            <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});
