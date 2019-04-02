import React, { CSSProperties } from 'react';
import { Card } from 'antd';
import {
  StatisticsTopPanel,
  StatisticsPanelInstall,
  StatisticsPanelBits
} from '../components/statistics-panel';
import { StatisticInstallGraph, StatisticBitsGraph } from '../components/graphs';
import { ITwitchExtensionPrimitiveCSV } from '../components/types';
interface IProps {
  cardBody: CSSProperties;
  gridStyleStatisc: CSSProperties;
  statisticStyle: CSSProperties;
  gridStyle: CSSProperties;
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
}
export const OverViewBox = ({
  cardBody,
  gridStyleStatisc,
  statisticStyle,
  gridStyle,
  csv,
  initialDateIndex,
  lastDateIndex
}: IProps): JSX.Element => (
  <Card style={cardBody}>
    <Card.Grid style={gridStyleStatisc}>
      <StatisticsTopPanel css={statisticStyle} value={csv[0]} />
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <StatisticsPanelInstall cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticInstallGraph
          data={csv}
          initialDateIndex={initialDateIndex}
          lastDateIndex={lastDateIndex}
        />
      </StatisticsPanelInstall>
    </Card.Grid>
    <Card.Grid style={gridStyle}>
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
