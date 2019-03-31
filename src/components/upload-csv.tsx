import React from 'react';
import { Input, Icon } from 'antd';

interface IProps {
  handleFileChosen(event: any): void;
}
export const ImportTwitchCSV = ({ handleFileChosen }: IProps) => {
  return (
    <label className='label'>
      <Input
        type='file'
        accept='.csv'
        onChange={(e: any) => handleFileChosen(e.target.files[0])}
        placeholder='Click to Upload'
        prefix={<Icon type='upload' style={{ color: 'rgba(0,0,0,.25)', margin: 30, padding: 5 }} />}
      />
    </label>
  );
};
