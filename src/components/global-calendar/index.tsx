import React, { FunctionComponent, memo } from 'react';
import { DatePicker } from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { AppState, dataChosen } from '../../store';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { ITwitchExtensionPrimitiveCSV } from '../types';

import { makeRanges } from '../../utils';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
interface IStateToProps {
  data: ITwitchExtensionPrimitiveCSV[] | null;
}
interface DispachProps {
  makeRanges(): void;
  parseDateToIndex(props: RangePickerValue): void;
}
type Props = DispachProps & IStateToProps;

const GlobalCalendar: FunctionComponent<Props> = ({ parseDateToIndex, data }) => (
  <>
    {data === null ? (
      'loading'
    ) : (
      <div className={'analyzeExtraWrap'}>
        <RangePicker
          defaultValue={[
            moment(data[data.length - 1].Date, dateFormat),
            moment(data[0].Date, dateFormat)
          ]}
          ranges={makeRanges(data)}
          format={dateFormat}
          size={'large'}
          onChange={props => parseDateToIndex(props)}
          disabled={data === null || !data.length}
        />
      </div>
    )}
  </>
);
const mapStateToProps = (state: AppState): IStateToProps => ({
  data: state.csv.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispachProps => {
  return {
    parseDateToIndex: (props: RangePickerValue) => {
      dispatch(dataChosen(props));
    },
    makeRanges() {}
  };
};
const GlobalCalendarBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalCalendar);

export default memo(() => <GlobalCalendarBox />);
