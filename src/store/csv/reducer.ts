import { ICSVState, CSVActionsType } from './types';
import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from './constants';

const initialState: ICSVState = {
  fileReader: new FileReader(),
  load: false,
  uploadCSV: false,
  data: null,
  name: 'Extension Name',
  initialDateIndex: 0,
  lastDateIndex: 0
};

export function csvReducer(state = initialState, action: CSVActionsType): ICSVState {
  switch (action.type) {
    case TOGGLE_LOAD:
      return {
        ...state,
        load: action.payload
      };
    case HANDLE_FILE_CHOSEN:
      return {
        ...state,
        data: action.payload,
        name: action.payload[0]['Extension Name'],
        lastDateIndex: action.payload.length - 1,
        uploadCSV: true,
        load: true
      };
    case HANDLE_RANGE_PICKER:
      const { dataIndex } = action.payload;
      const { initialDateIndex, lastDateIndex } = dataIndex;
      return {
        ...state,
        initialDateIndex,
        lastDateIndex
      };
    default:
      return state;
  }
}
