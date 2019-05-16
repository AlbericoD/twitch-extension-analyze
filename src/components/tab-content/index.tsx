import React, { Suspense, ReactNode, memo, NamedExoticComponent } from 'react';
import { Row, Col, Skeleton } from 'antd';

interface ITab {
  children: ReactNode;
}

const TabContent: NamedExoticComponent<ITab> = memo(({ children }) => (
  <Row>
    <Col xl={24} lg={24} md={24} sm={24} xs={24}>
      <div className={'analyzeBar'}>
        <Suspense fallback={<Skeleton active />}>{children}</Suspense>
      </div>
    </Col>
  </Row>
));

export default TabContent;
