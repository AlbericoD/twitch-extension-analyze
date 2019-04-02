import React from 'react';

import { ITwitchExtensionPrimitiveCSV } from '../components/types';
import {
  cardBody,
  statisticStyle,
  gridStyle,
  graphCardStyle,
  gridStyleStatisc
} from '../components/style';

import { OverViewBox } from './overview';
import { InstallationsGraphBox } from './installations-graph';
import { MonetizationGraphBox } from './monetization-graph';
import { InterationGraphBox } from './interation-graph';
import { Empty, PageHeader } from 'antd';
import { ImportTwitchCSV } from '../components';

interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
  menu: string;
  handleFileChosen: (file: any) => void;
}
const panels = ({
  csv,
  initialDateIndex,
  lastDateIndex,
  menu,
  handleFileChosen
}: IProps): JSX.Element => {
  switch (menu) {
    case 'upload-csv':
      return (
        <Empty
          style={{ height: '75vh', margin: 20, padding: 30 }}
          description={
            <span>
              Please click the button to import your CSV file <b>( V2+ )</b>
            </span>
          }>
          <PageHeader
            title='CSV File'
            subTitle={<ImportTwitchCSV handleFileChosen={handleFileChosen} />}
          />
        </Empty>
      );
    case 'overview':
      return (
        <OverViewBox
          cardBody={cardBody}
          gridStyleStatisc={gridStyleStatisc}
          statisticStyle={statisticStyle}
          gridStyle={gridStyle}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
          csv={csv}
        />
      );
    case 'installations':
      return (
        <InstallationsGraphBox
          graphCardStyle={graphCardStyle}
          gridStyleStatisc={gridStyleStatisc}
          statisticStyle={statisticStyle}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
          csv={csv}
        />
      );
    case 'monetization':
      return (
        <MonetizationGraphBox
          graphCardStyle={graphCardStyle}
          gridStyleStatisc={gridStyleStatisc}
          statisticStyle={statisticStyle}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
          csv={csv}
        />
      );
    case 'iteraction':
      return (
        <InterationGraphBox
          graphCardStyle={graphCardStyle}
          gridStyleStatisc={gridStyleStatisc}
          statisticStyle={statisticStyle}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
          csv={csv}
        />
      );

    default:
      return (
        <Empty
          style={{ height: '75vh', margin: 20, padding: 30 }}
          description={<span>OPSSSS, strange you show up here</span>}
        />
      );
  }
};
export const ContentBox = (props: IProps): JSX.Element => panels(props);
