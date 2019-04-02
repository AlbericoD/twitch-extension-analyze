import React, { CSSProperties } from 'react';
import { Card } from 'antd';
import { StatisticsPanelInstall } from '../components/statistics-panel';
import { StatisticInstallGraph } from '../components/graphs/install-statistic-graph';
import { ITwitchExtensionPrimitiveCSV } from '../components';

interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const InstallationsGraphBox = ({
  gridStyleStatisc,
  statisticStyle,
  graphCardStyle,
  csv,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Card style={graphCardStyle}>
    <Card.Grid style={{ width: '100%', padding: 3 }}>
      <StatisticsPanelInstall cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticInstallGraph
          data={csv}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
        />
      </StatisticsPanelInstall>
    </Card.Grid>
  </Card>
);
