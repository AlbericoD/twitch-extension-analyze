import React, { CSSProperties } from 'react';
import { Card } from 'antd';
import { StatisticsPanelIteration } from '../components/statistics-panel';
import { ITwitchExtensionPrimitiveCSV } from '../components';
import { StatisticIteractionGraph } from '../components/graphs';

interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const InterationGraphBox = ({
  gridStyleStatisc,
  statisticStyle,
  graphCardStyle,
  csv,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Card style={graphCardStyle}>
    <Card.Grid style={{ width: '100%', padding: 3 }}>
      <StatisticsPanelIteration cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticIteractionGraph
          data={csv}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
        />
      </StatisticsPanelIteration>
    </Card.Grid>
  </Card>
);
