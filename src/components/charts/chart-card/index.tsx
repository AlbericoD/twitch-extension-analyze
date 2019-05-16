import React, { memo, ReactNode, FunctionComponent } from 'react';
import { Card } from 'antd';
import './index.less';

interface IChartCard {
  children: ReactNode;
  title: string | JSX.Element;
  loading: boolean;
}
export const ChartCard: FunctionComponent<IChartCard> = memo(({ children, title, loading }) => {
  return (
    <Card bodyStyle={{ padding: '20px 24px 8px 24px' }} loading={loading}>
      <div className={'chartCard'}>
        <div className={'chartTop chartTopMargin'}>
          <div className={'metaWrap'}>
            <div className={'meta'}>
              <span className={'title'}>{title}</span>
            </div>
            <div className={'total'} />
          </div>
        </div>
        {children && (
          <div className={'content-mini'} style={{ height: 'auto' }}>
            <div className={'contentHeight contentFixed'}>{children}</div>
          </div>
        )}
      </div>
    </Card>
  );
});
