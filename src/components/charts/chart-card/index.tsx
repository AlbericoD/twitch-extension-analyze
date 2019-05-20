import React, { memo, ReactNode, FunctionComponent } from 'react';
import { Card } from 'antd';
import './index.less';

interface IChartCard {
  children?: ReactNode;
  title: string | JSX.Element;
  loading: boolean;
  footer?: JSX.Element;
  value?: number | string | JSX.Element | null;
  action?: JSX.Element | null;
}
export const ChartCard: FunctionComponent<IChartCard> = memo(
  ({ children, title, loading, footer, value, action }) => {
    return (
      <Card bodyStyle={{ padding: '20px 24px 8px 24px' }} loading={loading}>
        <div className={'chartCard'}>
          <div className={'chartTop chartTopMargin'}>
            <div className={'metaWrap'}>
              <div className={'meta'}>
                <span className={'title'}>{title}</span>
                <span className={'action'}>{action}</span>
              </div>
              <div className={'total'}>{value}</div>
            </div>
          </div>
          {children && (
            <div className={'content-mini'} style={{ height: 'auto' }}>
              <div className={'contentHeight contentFixed'}>{children}</div>
            </div>
          )}
          {footer !== undefined ? <div className={'footer footerMargin'}>{footer}</div> : null}
        </div>
      </Card>
    );
  }
);
