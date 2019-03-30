import React from 'react';
import { Input, Icon, Statistic, Row, Col, Button } from 'antd';
import { ITwitchExtensionPrimitiveCSV, ITwitchExtensionRealCSV } from './types';
const sumBits = (arr: number[]): number => {
  return arr.reduce((prev, next) => prev + next);
};

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
//   <Col span={12}>
//     <Statistic title='Active Users' value={112893} />
//   </Col>
//   <Col span={12}>
//     <Statistic title='Bits Revenue Balance (USD)' value={112893} precision={2} />
//     <Statistic title='Bits Used (QTd)' value={112893} precision={2} />
//     <Statistic title='Bits Transactions (Bits)' value={112893} precision={2} />
//     <Statistic title='Bits Revenue Balance (USD)' value={112893} precision={2} />
//   </Col>
