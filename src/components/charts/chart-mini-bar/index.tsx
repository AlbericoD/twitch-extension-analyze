import React, { memo, NamedExoticComponent, FunctionComponent } from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import '../index.less';

interface IData {
  date: string;
  value: number | string;
}
interface IMiniBar {
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
export const MiniBar: NamedExoticComponent<IMiniBar> = memo(({ data }) => {
  return (
    <div className={'miniChart'}>
      <div className={'chartContent'}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey='value' fill='#8884d8' />
            //@ts-ignore
            <Tooltip content={props => <CustomTooltip {...props} />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});
