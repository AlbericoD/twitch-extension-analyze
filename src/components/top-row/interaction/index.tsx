import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Tag, Statistic } from 'antd';
import { ChartCard, MiniBar, MiniArea, MiniLine, Trend } from '../../charts';
import { connect } from 'react-redux';
import { AppState, ITopRowMonetization } from '../../../store';

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
type Props = MapStateToProps & ITopRowMonetization;
const TopRow: NamedExoticComponent<Props> = memo(
  ({ totalBitsUsed, bitsRevenue, bitsUsedPerUser, bitsUsers, loading }) => (
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
              value={totalBitsUsed.bitsUsed}
            />
          }>
          <div style={{ marginRight: 16 }}>
            <Trend flag='up'>
              Unique Viewers
              <span className={'trendText'}>{totalBitsUsed.bitsTransactions}</span>
            </Trend>
            <br />
            <Trend flag='down'>
              Unique Minimizers
              <span className={'trendText'}>{totalBitsUsed.bitsPerTransaction}</span>
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
              value={bitsRevenue.total}
              precision={2}
            />
          }>
          <MiniArea data={bitsRevenue.data} />
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
              value={bitsUsedPerUser.total}
            />
          }>
          <MiniLine data={bitsUsedPerUser.data} />
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
              value={bitsUsers.total}
            />
          }>
          <MiniBar data={bitsUsers.data} />
        </ChartCard>
      </Col>
    </Row>
  )
);

const mapStateToProps = (state: AppState): Props => ({
  totalBitsUsed: state.monetization.topRow.totalBitsUsed,
  bitsRevenue: state.monetization.topRow.bitsRevenue,
  bitsUsedPerUser: state.monetization.topRow.bitsUsedPerUser,
  bitsUsers: state.monetization.topRow.bitsUsers,
  loading: state.overview.load
});

export default connect(
  mapStateToProps,
  null
)(TopRow);
