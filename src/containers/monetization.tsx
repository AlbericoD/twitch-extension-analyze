import React, { lazy, Suspense, memo, NamedExoticComponent, ReactNode } from 'react';
import { PageLoading } from '../layout';
import { AppState, IMonetizationGraphs } from '../store';
import { connect } from 'react-redux';
import { Card, Tabs, Skeleton } from 'antd';

const GlobalCalendar = lazy(() => import('../components/global-calendar'));
const TopRow = lazy(() => import('../components/top-row/monetization/bits'));
const GraphComposed = lazy(() => import('../components/charts/composed'));
const GraphRadar = lazy(() => import('../components/charts/radar'));
const GraphLine = lazy(() => import('../components/charts/line'));
const GraphBiaxial = lazy(() => import('../components/charts/biaxial'));
const GraphStackedArea = lazy(() => import('../components/charts/stacked-area'));
const TabContent = lazy(() => import('../components/tab-content'));

const { TabPane } = Tabs;

interface DispachProps {}
interface MapStateToProps {
  load: boolean;
  data: IMonetizationGraphs;
}
type Props = DispachProps & MapStateToProps;

interface ITabsContent {
  title: string;
  content: ReactNode;
}

const makeContent = (data: IMonetizationGraphs): ITabsContent[] => [
  {
    title: 'Composed',
    content: (
      <GraphComposed
        data={data.composed}
        area='uniqueInteractors'
        line='bitsUsed'
        firstBar='bitsUsedPerUser'
        secondBar='bitsTransactions'
      />
    )
  },
  {
    title: 'Radar',
    content: (
      <GraphRadar
        data={data.radar}
        domains={'date'}
        radarA={{ name: 'Clicks Per Interactor', value: 'clicksPerInteractor' }}
        radarB={{ name: 'Bits Used', value: 'bitsUsed' }}
        radarC={{ name: 'Unique Minimizer', value: 'uniqueMinimizations' }}
        radarD={{ name: 'Bits Used Per User', value: 'bitsUsedPerUser' }}
      />
    )
  },
  {
    title: 'Line',
    content: (
      <GraphLine
        data={data.line}
        firstLineA='clicksPerInteractor'
        secondLineA='uniqueMinimizations'
        thirdLineA='mouseEnterPerView'
        firstLineB='bitsUsed'
        secondLineB='bitsUsedPerUser'
        thirdLineB='bitsTransactions'
      />
    )
  },
  {
    title: 'Biaxial Line',
    content: (
      <GraphBiaxial
        data={data.line}
        firstLineA='clicksPerInteractor'
        secondLineA='uniqueMinimizations'
        thirdLineA='mouseEnterPerView'
        firstLineB='bitsUsed'
        secondLineB='bitsTransactions'
        thirdLineB='bitsUsedPerUser'
      />
    )
  },
  {
    title: 'Stacked Area',
    content: (
      <GraphStackedArea
        data={data.line}
        firtArea='clicksPerInteractor'
        secondArea='bitsTransactions'
        thirdArea='bitsUsed'
        fourthArea='uniqueMinimizations'
      />
    )
  }
];

const Monetization: NamedExoticComponent<Props> = memo(
  ({ data, load }): JSX.Element => (
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
              {data === null
                ? null
                : makeContent(data).map((c, index) => (
                    <TabPane tab={c.title} key={`${index}`}>
                      <Suspense fallback={<Skeleton active />}>
                        <TabContent>{c.content}</TabContent>
                      </Suspense>
                    </TabPane>
                  ))}
            </Tabs>
            ;
          </div>
        </Card>
      </Suspense>
    </>
  )
);
const mapStateToProps = (state: AppState): MapStateToProps => ({
  data: state.monetization.data,
  load: state.monetization.load
});

const MonetizationBox = connect(
  mapStateToProps,
  null
)(Monetization);

export default memo(() => <MonetizationBox />);
