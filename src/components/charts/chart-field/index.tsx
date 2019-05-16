import React, { FunctionComponent } from 'react';
import './index.less';

interface IField {
  label: string | JSX.Element;
  value?: number;
}
export const Field: FunctionComponent<IField> = ({ label, value, ...rest }) => (
  <div className={'field'} {...rest}>
    <span className={'label'}>{label}</span>
  </div>
);
