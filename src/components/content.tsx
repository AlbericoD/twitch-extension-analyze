import React from 'react';
import { Card, Button } from 'antd';
import { StatisticsTopPanel } from './statistics-top-panel';
import { StatisticsPanelInstall } from './statistics-panel-install';
import { StatisticsPanelBits } from './statistics-panel-bits';
import { StatisticInstallGraph } from './install-statistic-graph';
import { StatisticBitsGraph } from './bits-statistic-graph';
import { ITwitchExtensionPrimitiveCSV } from './types';
import { cardBody, statisticStyle, gridStyle, gridStyleStatisc } from './style';

interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[];
}
export const ContentBox = ({ csv }: IProps): JSX.Element => (
  <Card style={cardBody}>
    <Card.Grid style={gridStyleStatisc}>
      <StatisticsTopPanel css={statisticStyle} value={csv[0]} />
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <StatisticsPanelInstall cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticInstallGraph data={csv} />
      </StatisticsPanelInstall>
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      <StatisticsPanelBits cardCss={gridStyleStatisc} statisticCss={statisticStyle} csv={csv}>
        <StatisticBitsGraph data={csv} />
      </StatisticsPanelBits>
    </Card.Grid>
  </Card>
);
