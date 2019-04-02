import React, { CSSProperties } from 'react';
import { Card } from 'antd';
import { StatisticsPanelBits } from '../components/statistics-panel';
import { StatisticBitsGraph } from '../components/graphs';
import { ITwitchExtensionPrimitiveCSV } from '../components/types';
interface IProps {
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  graphCardStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const MonetizationGraphBox = ({
  graphCardStyle,
  gridStyleStatisc,
  statisticStyle,
  csv,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Card style={graphCardStyle}>
    <Card.Grid style={{ width: '100%', padding: 3 }}>
      <StatisticsPanelBits cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticBitsGraph
          data={csv}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
        />
      </StatisticsPanelBits>
    </Card.Grid>
  </Card>
);
