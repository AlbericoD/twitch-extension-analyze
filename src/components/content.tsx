import React from 'react';
import { Card, Row, Col } from 'antd';
import { StatisticsTopPanel } from './statistics-top-panel';
import { StatisticsPanelInstall } from './statistics-panel-install';
import { StatisticsPanelIteration } from './statistics-panel-iteration';
import { StatisticsPanelBits } from './statistics-panel-bits';
import { StatisticInstallGraph } from './install-statistic-graph';
import { StatisticIteractionGraph } from './statistics-panel-iteration-graph';
import { StatisticBitsGraph } from './bits-statistic-graph';
import { ITwitchExtensionPrimitiveCSV } from './types';
import { cardBody, statisticStyle, gridStyle, gridStyleStatisc, graphCardStyle } from './style';
interface IProps {
  csv: ITwitchExtensionPrimitiveCSV[];
  initialDateIndex: number;
  lastDateIndex: number;
  menu: string;
}
const panels = ({ csv, initialDateIndex, lastDateIndex, menu }: IProps): JSX.Element => {
  switch (menu) {
    case '2':
      return (
        <Card style={graphCardStyle}>
          <Card.Grid style={{ width: '100%', padding: 3 }}>
            <StatisticsPanelInstall
              cardCss={gridStyleStatisc}
              statisticCss={statisticStyle}
              csv={csv}>
              <StatisticInstallGraph
                data={csv}
                initialDateIndex={initialDateIndex}
                lastDateIndex={lastDateIndex}
              />
            </StatisticsPanelInstall>
          </Card.Grid>
        </Card>
      );
    case '3':
      return (
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
    case '4':
      return (
        <Card style={graphCardStyle}>
          <Card.Grid style={{ width: '100%', padding: 3 }}>
            <StatisticsPanelIteration
              cardCss={gridStyleStatisc}
              statisticCss={statisticStyle}
              csv={csv}>
              <StatisticIteractionGraph
                data={csv}
                initialDateIndex={initialDateIndex}
                lastDateIndex={lastDateIndex}
              />
            </StatisticsPanelIteration>
          </Card.Grid>
        </Card>
      );

    default:
      return (
        <Card style={cardBody}>
          <Card.Grid style={gridStyleStatisc}>
            <StatisticsTopPanel css={statisticStyle} value={csv[0]} />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <StatisticsPanelInstall
              cardCss={gridStyleStatisc}
              statisticCss={statisticStyle}
              csv={csv}>
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
  }
};
export const ContentBox = (props: IProps): JSX.Element => panels(props);
