import React, { lazy, Suspense, memo, NamedExoticComponent, ReactNode } from 'react';
import { PageLoading } from '../layout';
import { AppState, IInteractionGraphs } from '../store';
import { connect } from 'react-redux';
import { Card, Tabs, Skeleton } from 'antd';

const GlobalCalendar = lazy(() => import('../components/global-calendar'));
const TopRow = lazy(() => import('../components/top-row/interaction'));
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
  data: IInteractionGraphs;
}
type Props = DispachProps & MapStateToProps;

interface ITabsContent {
  title: string;
  content: ReactNode;
}

const makeContent = (data: IInteractionGraphs): ITabsContent[] => [
  {
    title: 'Composed',
    content: (
      <GraphComposed
        data={data.composed}
        area='uniqueInteractors'
        line='interactionRate'
        firstBar='minimizationRate'
        secondBar='unminimizationRate'
      />
    )
  },
  {
    title: 'Radar',
    content: (
      <GraphRadar
        data={data.radar}
        domains={'date'}
        radarA={{ name: 'Clicks', value: 'clicks' }}
        radarB={{ name: 'Clicks Per Interactor', value: 'clicksPerInteractor' }}
        radarC={{ name: 'Mouse Enters', value: 'mouseEnters' }}
        radarD={{ name: 'Mouse Enters Per Viewer', value: 'mouseentersPerViewer' }}
      />
    )
  },
  {
    title: 'Line',
    content: (
      <GraphLine
        data={data.line}
        firstLineA='clicksPerInteractor'
        secondLineA='mouseEntersPerView'
        thirdLineA='uniqueInteractors'
        firstLineB='clicks'
        secondLineB='mouseEnters'
        thirdLineB='minimizations'
      />
    )
  },
  {
    title: 'Biaxial Line',
    content: (
      <GraphBiaxial
        data={data.line}
        firstLineA='clicksPerInteractor'
        secondLineA='mouseEntersPerView'
        thirdLineA='uniqueInteractors'
        firstLineB='clicks'
        secondLineB='mouseEnters'
        thirdLineB='minimizations'
      />
    )
  },
  {
    title: 'Stacked Area',
    content: (
      <GraphStackedArea
        data={data.composed}
        firtArea=''
        secondArea='interactionRate'
        thirdArea='minimizationRate'
        fourthArea='unminimizationRate'
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
  data: state.interaction.data,
  load: state.interaction.load
});

const InteractionBox = connect(
  mapStateToProps,
  null
)(Monetization);

export default memo(() => <InteractionBox />);
