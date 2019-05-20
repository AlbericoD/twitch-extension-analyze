import React, { memo, NamedExoticComponent } from 'react';
import { Row, Col, Statistic, Select } from 'antd';
import { ChartCard } from '../../charts';
import { connect } from 'react-redux';
import { AppState, ITopRowManualBuild, ISetPropertyPayload, setProperty } from '../../../store';
import { ITwitchExtensionPrimitiveCSV } from '../../types';
import { ThunkDispatch } from 'redux-thunk';

const Option = Select.Option;
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 }
};
interface DispacthToProps {
  onChangeProperty({ property, position }: ISetPropertyPayload): void;
}
interface MapStateToProps {
  loading: boolean;
  data: ITopRowManualBuild[];
  propName: ITwitchExtensionPrimitiveCSV[] | null;
}

const test = new RegExp(/[7?30]|(.Name|.Client|Date)/, 'g');
type Props = MapStateToProps & DispacthToProps;
const TopRow: NamedExoticComponent<Props> = memo(
  ({ data, loading, propName, onChangeProperty }) => (
    <Row gutter={24}>
      {data.map((v, position) => (
        <Col {...topColResponsiveProps} key={position}>
          <ChartCard
            loading={loading}
            title={v.name.length ? v.name : 'Empty Property'}
            value={
              <Select
                showSearch
                style={{ width: '17vw' }}
                placeholder='Select a data props'
                optionFilterProp='children'
                onChange={(p: string) => onChangeProperty(JSON.parse(p))}>
                <Option key={'clear'} value={JSON.stringify({ property: '', position })}>
                  Clear
                </Option>
                {Object.keys(propName === null ? [] : propName[0])
                  .filter(v => !v.match(test))
                  .map((property, index) => (
                    <Option key={index} value={JSON.stringify({ property, position })}>
                      {property}
                    </Option>
                  ))}
              </Select>
            }
            footer={
              <Statistic value={v.value} style={{ display: 'inline-block', float: 'right' }} />
            }
          />
        </Col>
      ))}
    </Row>
  )
);

const mapStateToProps = (state: AppState): MapStateToProps => ({
  data: state.manualBuild.topRow,
  loading: state.manualBuild.load,
  propName: state.csv.data
});
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispacthToProps => {
  return {
    onChangeProperty: props => {
      dispatch(setProperty(props));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRow);
