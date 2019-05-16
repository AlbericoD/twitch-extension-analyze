import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import * as creators from './creators';
import { csvToJSON } from '../../utils';
import { RangePickerValue } from 'antd/lib/date-picker/interface';

export const toogleLoad = (
  load: boolean
): ThunkAction<void, AppState, {}, AnyAction> => dispatch => {
  dispatch(creators.toggleLoad(load));
};

export const fileChosen = (file: any): ThunkAction<void, AppState, {}, AnyAction> => (
  dispatch,
  state
) => {
  dispatch(toogleLoad(true));
  const { fileReader } = state().csv;
  fileReader.onloadend = () => {
    if (typeof fileReader.result === 'string') {
      const content: string = fileReader.result;
      dispatch(creators.handleFileChosen(csvToJSON(content)));
      setTimeout(() => {
        dispatch(creators.toggleLoad(false));
      }, 4000);
    }
  };
  fileReader.readAsText(file);
};
export const dataChosen = (props: RangePickerValue): ThunkAction<void, AppState, {}, AnyAction> => (
  dispatch,
  state
) => {
  const { data } = state().csv;
  const dataIndex = {
    initialDateIndex: 0,
    lastDateIndex: 0
  };
  if (data !== null && props.length === 2) {
    props.forEach((date, ind) => {
      if (date !== undefined) {
        const index = data.findIndex(item => item.Date === date.format('YYYY-MM-DD'));
        if (index !== -1 && ind === 1) dataIndex.initialDateIndex = index;
        if (index !== -1 && ind === 0) dataIndex.lastDateIndex = index;
      }
    });
    dispatch(creators.handleDataChosen(dataIndex, data));
  }
};
