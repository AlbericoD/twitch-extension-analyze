import React, { ReactNode, FunctionComponent } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import './index.less';
interface ITrend {
  colorful?: boolean;
  reverseColor?: boolean;
  flag: string;
  children?: ReactNode;
  className?: string;
}
export const Trend: FunctionComponent<ITrend> = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  ...rest
}) => {
  const classString = classNames(
    'trendItem',
    {
      trendItemGrey: !colorful,
      reverseColor: reverseColor && colorful
    },
    className
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span>{children}</span>
      {flag && (
        <span className={flag}>
          <Icon type={`caret-${flag}`} />
        </span>
      )}
    </div>
  );
};
