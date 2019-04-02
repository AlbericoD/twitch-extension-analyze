import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import { Card } from 'antd';
import { StatisticsPanelIteration } from '../components/statistics-panel';
import { ITwitchExtensionPrimitiveCSV, IIteraction } from '../components';
import { StatisticIteractionGraph } from '../components/graphs';

interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
interface IContainerData {
  iteraction: IIteraction[];
  csv: ITwitchExtensionPrimitiveCSV[];
}

const makeData = (
  csv: ITwitchExtensionPrimitiveCSV[],
  initialDateIndex: number,
  lastDateIndex: number
): IContainerData => {
  let iteractionData: IIteraction[] = [];
  let csvData: ITwitchExtensionPrimitiveCSV[] = [];

  csv.filter((item, index) => {
    if (index >= lastDateIndex && index <= initialDateIndex) {
      const install: IIteraction = {
        name: item.Date,
        interactionRate: parseFloat(item['Interaction Rate']),
        minimizations: parseFloat(item['Minimization Rate']),
        unminimizations: parseFloat(item['Unminimization Rate'])
      };
      iteractionData.push(install);
      csvData.push(item);
    }
  });
  iteractionData.reverse();
  csvData.reverse();
  return {
    csv: csvData,
    iteraction: iteractionData
  };
};
export const InterationGraphBox: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const [data, setState] = useState<IContainerData>({ csv: [], iteraction: [] });
  useEffect(() => {
    setState(makeData(props.csv, props.initialDateIndex, props.lastDateIndex));
  }, [props.csv, props.initialDateIndex, props.lastDateIndex]);
  return (
    <Card style={props.graphCardStyle}>
      <Card.Grid style={{ width: '100%', padding: 3 }}>
        <StatisticsPanelIteration
          cardCss={props.gridStyleStatisc}
          statisticCss={props.statisticStyle}
          csv={data.csv}>
          <StatisticIteractionGraph data={data.iteraction} />
        </StatisticsPanelIteration>
      </Card.Grid>
    </Card>
  );
};
