import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import { ISetPropertyPayload } from './types';
import * as creators from './creators';

export const setProperty = (
  props: ISetPropertyPayload
): ThunkAction<void, AppState, {}, AnyAction> => (dispatch, state) => {
  const { data, initialDateIndex, lastDateIndex } = state().csv;
  dispatch(
    creators.setProperty({
      ...props,
      csv: data === null ? [] : data.slice(initialDateIndex, lastDateIndex)
    })
  );
};
