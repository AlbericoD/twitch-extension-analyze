import React, { CSSProperties, FunctionComponent, useState, useEffect } from 'react';
import { Card } from 'antd';
import { StatisticsPanelBits } from '../components/statistics-panel';
import { StatisticBitsGraph } from '../components/graphs';
import { ITwitchExtensionPrimitiveCSV, IDataBitsStatistic } from '../components/types';
interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
interface IContainerData {
  bits: IDataBitsStatistic[];
  csv: ITwitchExtensionPrimitiveCSV[];
}
const makeData = (
  csv: ITwitchExtensionPrimitiveCSV[],
  initialDateIndex: number,
  lastDateIndex: number
): IContainerData => {
  let bitsData: IDataBitsStatistic[] = [];
  let csvData: ITwitchExtensionPrimitiveCSV[] = [];

  csv.filter((item, index) => {
    if (index >= lastDateIndex && index <= initialDateIndex) {
      const bits: IDataBitsStatistic = {
        name: item.Date,
        USD: parseFloat(item['Bits Revenue USD']),
        bitsUsed: parseFloat(item['Bits Used']),
        transactions: parseFloat(item['Bits Transactions'])
      };
      bitsData.push(bits);
      csvData.push(item);
    }
  });
  bitsData.reverse();
  csvData.reverse();
  return {
    csv: csvData,
    bits: bitsData
  };
};

export const MonetizationGraphBox: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const [data, setState] = useState<IContainerData>({ csv: [], bits: [] });
  useEffect(() => {
    setState(makeData(props.csv, props.initialDateIndex, props.lastDateIndex));
  }, [props.csv, props.initialDateIndex, props.lastDateIndex]);
  return (
    <Card style={props.graphCardStyle}>
      <Card.Grid style={{ width: '100%', padding: 3 }}>
        <StatisticsPanelBits
          cardCss={props.gridStyleStatisc}
          statisticCss={props.statisticStyle}
          csv={data.csv}>
          <StatisticBitsGraph data={data.bits} />
        </StatisticsPanelBits>
      </Card.Grid>
    </Card>
  );
};
