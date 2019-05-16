import React, { lazy, Suspense, memo, NamedExoticComponent } from 'react';
import { PageLoading } from '../layout';
import { AppState, IOverviewState } from '../store';
import { connect } from 'react-redux';
import { Card, Tabs, Row, Col, Table, Tag, Skeleton } from 'antd';

const GlobalCalendar = lazy(() => import('../components/global-calendar'));
const TopRow = lazy(() => import('../components/top-row/overview'));
const GraphComposed = lazy(() => import('../components/charts/chart-overview/composed-chart'));
const GraphBits = lazy(() => import('../components/charts/chart-overview/bits-composed-chart'));
const { TabPane } = Tabs;
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: <Tag color='orange'>Normal</Tag>,
    dataIndex: 'ext-details',
    key: 'ext-details',
    sorter: (a: any, b: any) => a['ext-details'] - b['ext-details']
  },
  {
    title: <Tag color='purple'>Unique</Tag>,
    dataIndex: 'ext-unique-details',
    key: 'ext-unique-details',
    sorter: (a: any, b: any) => a['ext-unique-details'] - b['ext-unique-details']
  }
];

const columnsBits = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: <Tag color='green'>Revenue USD</Tag>,
    dataIndex: 'bits-revenue',
    key: 'bits-revenue',
    sorter: (a: any, b: any) => a['bits-revenue'] - b['bits-revenue']
  },
  {
    title: <Tag color='purple'>Per Transaction</Tag>,
    dataIndex: 'bits-per-transaction',
    key: 'bits-per-transaction',
    sorter: (a: any, b: any) => a['bits-per-transaction'] - b['bits-per-transaction']
  }
];
interface DispachProps {}
type Props = DispachProps & IOverviewState;

const OverView: NamedExoticComponent<Props> = memo(
  ({ list, load }): JSX.Element => (
    <>
      <Suspense fallback={<PageLoading />}>
        <TopRow />
      </Suspense>
      <Suspense fallback={<Skeleton active />}>
        <Card loading={load} bordered={true} bodyStyle={{ padding: 0 }}>
          <div className={'analyzeCard'}>
            <Tabs
              tabBarExtraContent={<GlobalCalendar />}
              size='large'
              tabBarStyle={{ marginBottom: 24 }}>
              <TabPane tab={'Installations'} key='analyze'>
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={'analyzeBar'}>
                      <Suspense fallback={<Skeleton active />}>
                        <GraphComposed />
                      </Suspense>
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={'analyzeRank'}>
                      <h1>Extension Details Page Visits</h1>
                      <Table dataSource={list} columns={columns} pagination={{ pageSize: 5 }} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={'Monetization'} key='views'>
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={'analyzeBar'}>
                      <Suspense fallback={<Skeleton active />}>
                        <GraphBits />
                      </Suspense>
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={'analyzeRank'}>
                      <h1>Bits Details</h1>
                      <Table dataSource={list} columns={columnsBits} pagination={{ pageSize: 5 }} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Card>
      </Suspense>
    </>
  )
);
const mapStateToProps = (state: AppState): IOverviewState => ({
  data: state.overview.data,
  topRow: state.overview.topRow,
  load: state.overview.load,
  list: state.overview.list
});

const OverViewBox = connect(
  mapStateToProps,
  null
)(OverView);

export default memo(() => <OverViewBox />);
