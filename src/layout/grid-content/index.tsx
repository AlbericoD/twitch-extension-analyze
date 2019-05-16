import React, { FunctionComponent, ReactNode } from 'react';
import './index.less';

interface IGridContent {
  children: ReactNode;
}
export const GridContent: FunctionComponent<IGridContent> = ({ children }) => {
  return <div className='main'>{children}</div>;
};
