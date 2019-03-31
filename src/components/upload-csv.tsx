import React from 'react';
import { Input, Icon, Row, Col } from 'antd';

interface IProps {
  handleFileChosen(event: any): void;
}
export const ImportTwitchCSV = ({ handleFileChosen }: IProps) => {
  return (
    <Row gutter={16} style={{ margin: 10 }}>
      <Col span={6}>
        <label className='label'>
          <span className='title'>Add CSV</span>
          <Input
            type='file'
            accept='.csv'
            onChange={(e: any) => handleFileChosen(e.target.files[0])}
            placeholder='Click to Upload'
            prefix={<Icon type='upload' style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </label>
      </Col>
    </Row>
  );
};
