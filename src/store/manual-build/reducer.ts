import { IManualBuildState, ManualBuildType } from './types';
import { TOGGLE_LOAD, HANDLE_RANGE_PICKER } from '../csv/constants';
import { SET_PROPERTY } from './constants';
// import { DataPrgInteration } from '../../utils';
import moment from 'moment';

const initialState: IManualBuildState = {
  load: false,
  data: [],
  topRow: [
    {
      id: 1,
      name: '',
      value: 0
    },
    {
      id: 2,
      name: '',
      value: 0
    },
    {
      id: 3,
      name: '',
      value: 0
    },
    {
      id: 4,
      name: '',
      value: 0
    }
  ]
};

export function manualBuildReducer(
  state = initialState,
  action: ManualBuildType
): IManualBuildState {
  switch (action.type) {
    case TOGGLE_LOAD:
      return {
        ...state,
        load: action.payload
      };

    case SET_PROPERTY:
      const { position, property, csv } = action.payload;
      const { topRow } = state;
      topRow[position].name = property;

      topRow[position].value =
        csv.map(c => Number(c[property])).reduce((prev, curr) => prev + curr, 0) || 0;

      const data = csv
        .map(value => ({
          ...value,
          date: moment(value.Date, 'YYYY/MM/DD').format('L'),
          [property]: value[property]
        }))
        .reverse();
      return {
        ...state,
        topRow: [...topRow],
        data: [...state.data, ...data]
      };
    case HANDLE_RANGE_PICKER:
      const { dataIndex } = action.payload;
      const newDate = action.payload.data;
      const newGraphs = newDate
        .slice(dataIndex.initialDateIndex, dataIndex.lastDateIndex)
        .map(value => ({
          ...value,
          date: moment(value.Date, 'YYYY/MM/DD').format('L'),
          [state.topRow[0].name]: value[state.topRow[0].name],
          [state.topRow[1].name]: value[state.topRow[1].name],
          [state.topRow[2].name]: value[state.topRow[2].name],
          [state.topRow[3].name]: value[state.topRow[3].name]
        }))
        .reverse();

      return {
        ...state,
        data: newGraphs
      };
    default:
      return state;
  }
}
