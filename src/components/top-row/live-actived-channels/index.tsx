import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Tag, Statistic } from 'antd';
import { ChartCard } from '../../charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  style: { marginBottom: 24 }
};
interface IProps {
  totalChannels: number;
  totalViewCount: number;
}

const TopRow: NamedExoticComponent<IProps> = memo(({ totalChannels, totalViewCount }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={false}
        title={
          <Statistic
            title={
              <>
                <Tag color='purple'>Total</Tag>Channels
              </>
            }
            value={totalChannels}
          />
        }>
        {''}
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={false}
        title={
          <Statistic
            title={
              <>
                <Tag color='purple'>Total</Tag>View count
              </>
            }
            value={totalViewCount}
          />
        }>
        {''}
      </ChartCard>
    </Col>
  </Row>
));

export default TopRow;
