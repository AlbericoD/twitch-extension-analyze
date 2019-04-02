import React, { CSSProperties, FunctionComponent, useState, useEffect } from 'react';
import { Card } from 'antd';
import { StatisticsPanelInstall } from '../components/statistics-panel';
import { StatisticInstallGraph } from '../components/graphs/install-statistic-graph';
import { ITwitchExtensionPrimitiveCSV, IDataInstalls } from '../components';

interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
interface IContainerData {
  installs: IDataInstalls[];
  csv: ITwitchExtensionPrimitiveCSV[];
}
const makeData = (
  csv: ITwitchExtensionPrimitiveCSV[],
  initialDateIndex: number,
  lastDateIndex: number
): IContainerData => {
  let installsData: IDataInstalls[] = [];
  let csvData: ITwitchExtensionPrimitiveCSV[] = [];

  csv.filter((item, index) => {
    if (index >= lastDateIndex && index <= initialDateIndex) {
      const install: IDataInstalls = {
        name: item.Date,
        activations: parseInt(item.Activations),
        install: parseInt(item.Installs),
        uninstalls: parseInt(item.Uninstalls)
      };
      installsData.push(install);
      csvData.push(item);
    }
  });
  installsData.reverse();
  csvData.reverse();
  return {
    csv: csvData,
    installs: installsData
  };
};

export const InstallationsGraphBox: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const [data, setState] = useState<IContainerData>({ csv: [], installs: [] });
  useEffect(() => {
    setState(makeData(props.csv, props.initialDateIndex, props.lastDateIndex));
  }, [props.csv, props.initialDateIndex, props.lastDateIndex]);

  return (
    <Card style={props.graphCardStyle}>
      <Card.Grid style={{ width: '100%', padding: 3 }}>
        <StatisticsPanelInstall
          cardCss={props.gridStyleStatisc}
          statisticCss={props.statisticStyle}
          csv={data.csv}>
          <StatisticInstallGraph data={data.installs} />
        </StatisticsPanelInstall>
      </Card.Grid>
    </Card>
  );
};
