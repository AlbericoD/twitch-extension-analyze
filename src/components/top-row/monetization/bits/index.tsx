import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Tag, Statistic } from 'antd';
import { ChartCard, MiniBar, MiniArea, MiniLine, Trend } from '../../../charts';
import { connect } from 'react-redux';
import { AppState, ITopRowMonetization } from '../../../../store';

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
                  <Tag color='magenta'>Total</Tag>Bits Used
                </>
              }
              value={totalBitsUsed.bitsUsed}
            />
          }>
          <div style={{ marginRight: 16 }}>
            <Trend flag='up'>
              Bits Transactions
              <span className={'trendText'}>{totalBitsUsed.bitsTransactions}</span>
            </Trend>
            <br />
            <Trend flag='up'>
              Bits Per Transaction
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
                  <Tag color='green'>USD</Tag>Bits Revenue
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
                  <Tag color='purple'>Unique</Tag>Bits Used Per User
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
                  <Tag color='magenta'>Total</Tag>Bits Users
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
  loading: state.monetization.load
});

export default connect(
  mapStateToProps,
  null
)(TopRow);
