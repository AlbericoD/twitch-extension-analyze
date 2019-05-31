import React, { useEffect } from 'react';
import ReactGA, { FieldsObject } from 'react-ga';
import { RouteComponentProps } from 'react-router-dom';

if (process.env.NODE_ENV === 'production') {
  //@ts-ignore
  ReactGA.initialize(process.env.REACT_APP_UC_GA | '');
} else {
  //@ts-ignore
  ReactGA.initialize(process.env.REACT_APP_UC_GA | '', { testMode: true });
}
export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {}
) => {
  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  return (props: P) => {
    useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };
};
