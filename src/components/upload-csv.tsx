import React from 'react';
import { Input } from 'antd';

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
      />
    </label>
  );
};
