import React, { lazy, Suspense, memo, NamedExoticComponent, ReactNode } from 'react';
import { PageLoading } from '../layout';
import { AppState, IGraphBuild, ITopRowManualBuild } from '../store';
import { connect } from 'react-redux';
import { Card, Tabs, Skeleton } from 'antd';

const GlobalCalendar = lazy(() => import('../components/global-calendar'));
const TopRow = lazy(() => import('../components/top-row/manual-build-graph'));
const GraphComposed = lazy(() => import('../components/charts/composed'));
const GraphRadar = lazy(() => import('../components/charts/radar'));
const GraphStackedArea = lazy(() => import('../components/charts/stacked-area'));
const TabContent = lazy(() => import('../components/tab-content'));

const { TabPane } = Tabs;

interface DispachProps {}
interface MapStateToProps {
  load: boolean;
  options: ITopRowManualBuild[];
  data: IGraphBuild[];
}
type Props = DispachProps & MapStateToProps;

interface ITabsContent {
  title: string;
  content: ReactNode;
}

const makeContent = (data: IGraphBuild[], options: ITopRowManualBuild[]): ITabsContent[] => [
  {
    title: 'Composed',
    content: (
      <GraphComposed
        data={data}
        area={options[0].name}
        line={options[1].name}
        firstBar={options[2].name}
        secondBar={options[3].name}
      />
    )
  },
  {
    title: 'Radar',
    content: (
      <GraphRadar
        data={data}
        domains={'date'}
        radarA={{ name: options[0].name, value: options[0].name }}
        radarB={{ name: options[1].name, value: options[1].name }}
        radarC={{ name: options[2].name, value: options[2].name }}
        radarD={{ name: options[3].name, value: options[3].name }}
      />
    )
  },
  {
    title: 'Stacked Area',
    content: (
      <GraphStackedArea
        data={data}
        firtArea={options[0].name}
        secondArea={options[1].name}
        thirdArea={options[2].name}
        fourthArea={options[3].name}
      />
    )
  }
];

const Monetization: NamedExoticComponent<Props> = memo(
  ({ data, load, options }): JSX.Element => (
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
                : makeContent(data, options).map((c, index) => (
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
  data: state.manualBuild.data,
  load: state.monetization.load,
  options: state.manualBuild.topRow
});

const MonetizationBox = connect(
  mapStateToProps,
  null
)(Monetization);

export default memo(() => <MonetizationBox />);
