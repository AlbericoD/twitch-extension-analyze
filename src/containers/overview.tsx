import React, { CSSProperties } from 'react';
import { Card } from 'antd';
import { StatisticsTopPanel } from '../components/statistics-panel';
import { ITwitchExtensionPrimitiveCSV } from '../components/types';
import { graphCardStyle } from '../components';

import { MonetizationGraphBox } from './monetization-graph';
import { InstallationsGraphBox } from './installations-graph';
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
      <InstallationsGraphBox
        csv={csv}
        graphCardStyle={graphCardStyle}
        gridStyleStatisc={gridStyleStatisc}
        statisticStyle={statisticStyle}
        initialDateIndex={initialDateIndex}
        lastDateIndex={lastDateIndex}
      />
    </Card.Grid>

    <Card.Grid style={gridStyle}>
      <MonetizationGraphBox
        csv={csv}
        graphCardStyle={graphCardStyle}
        gridStyleStatisc={gridStyleStatisc}
        statisticStyle={statisticStyle}
        initialDateIndex={initialDateIndex}
        lastDateIndex={lastDateIndex}
      />
    </Card.Grid>
  </Card>
);
