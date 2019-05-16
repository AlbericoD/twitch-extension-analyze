import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Tag, Statistic } from 'antd';
import { ChartCard, MiniBar, MiniArea, MiniLine, Trend } from '../../charts';
import { connect } from 'react-redux';
import { AppState, ITopRowOverview } from '../../../store';

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
type Props = MapStateToProps & ITopRowOverview;
const TopRow: NamedExoticComponent<Props> = memo(
  ({ activeChannels, mouseEnters, renderers, viewers, loading }) => (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='purple'>Unique</Tag>Active Channels
                </>
              }
              value={activeChannels.activations}
            />
          }>
          <div style={{ marginRight: 16 }}>
            <Trend flag='up'>
              Installs
              <span className={'trendText'}>{activeChannels.installs}</span>
            </Trend>
            <br />
            <Trend flag='down'>
              Uninstalls
              <span className={'trendText'}>{activeChannels.uninstalls}</span>
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
                  <Tag color='purple'>Unique</Tag>Interactors
                </>
              }
              value={renderers.total}
            />
          }>
          <MiniArea data={renderers.data} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='purple'>Unique</Tag>Viewers
                </>
              }
              value={viewers.total}
            />
          }>
          <MiniLine data={viewers.data} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          loading={loading}
          title={
            <Statistic
              title={
                <>
                  <Tag color='purple'>Unique</Tag>Mouse enters
                </>
              }
              value={mouseEnters.total}
            />
          }>
          <MiniBar data={mouseEnters.data} />
        </ChartCard>
      </Col>
    </Row>
  )
);

const mapStateToProps = (state: AppState): Props => ({
  activeChannels: state.overview.topRow.activeChannels,
  renderers: state.overview.topRow.renderers,
  mouseEnters: state.overview.topRow.mouseEnters,
  viewers: state.overview.topRow.viewers,
  loading: state.overview.load
});

export default connect(
  mapStateToProps,
  null
)(TopRow);
