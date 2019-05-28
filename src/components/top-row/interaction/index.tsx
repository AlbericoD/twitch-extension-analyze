import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Tag, Statistic } from 'antd';
import { ChartCard, MiniBar, MiniArea, MiniLine, Trend } from '../../charts';
import { connect } from 'react-redux';
import { AppState, ITopRowInteraction } from '../../../store';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};
interface MapStateToProps {
  loading: boolean;
}
// @albericod Right now, I was looking for a graph of Unique Rederers and/or Unique Viewers. (The number looks the same in my CSV).

// I would also like some Mouseenters vs. Clicks information.
type Props = MapStateToProps & ITopRowInteraction;
const TopRow: NamedExoticComponent<Props> = memo(
  ({ uniqueRenderers, interactionRate, minimizationRate, unminimization, loading }) => (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='purple'>Unique</Tag>Renderers
                </>
              }
              value={uniqueRenderers.totalUniqueRenderes}
            />
          }>
          <div style={{ marginRight: 16 }}>
            <Trend flag='up'>
              Unique Viewers
              <span className={'trendText'}>{uniqueRenderers.uniqueViewers}</span>
            </Trend>
            <br />
            <Trend flag='down'>
              Unique Minimizers
              <span className={'trendText'}>{uniqueRenderers.uniqueMinimizers}</span>
            </Trend>
          </div>
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='magenta'>Rate</Tag>Interaction
                </>
              }
              value={interactionRate.total}
              precision={4}
            />
          }>
          <MiniArea data={interactionRate.data} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='magenta'>Rate</Tag>Minimization
                </>
              }
              value={minimizationRate.total}
              precision={4}
            />
          }>
          <MiniLine data={minimizationRate.data} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='magenta'>Rate</Tag>Unminimization
                </>
              }
              value={unminimization.total}
              precision={4}
            />
          }>
          <MiniBar data={unminimization.data} />
        </ChartCard>
      </Col>
    </Row>
  )
);

const mapStateToProps = (state: AppState): Props => ({
  loading: state.interaction.load,
  uniqueRenderers: state.interaction.topRow.uniqueRenderers,
  interactionRate: state.interaction.topRow.interactionRate,
  minimizationRate: state.interaction.topRow.minimizationRate,
  unminimization: state.interaction.topRow.unminimization
});

export default connect(
  mapStateToProps,
  null
)(TopRow);
