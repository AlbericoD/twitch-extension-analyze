import { IMonetizationState, MonetizationType } from './types';
import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { DataPrgMonetization } from '../../utils';

const initialState: IMonetizationState = {
  load: false,
  data: {
    composed: [],
    radar: [],
    line: []
  },
  topRow: {
    totalBitsUsed: {
      bitsUsed: 0,
      bitsPerTransaction: 0,
      bitsTransactions: 0
    },
    bitsRevenue: {
      data: [],
      total: 0
    },
    bitsUsedPerUser: {
      data: [],
      total: 0
    },
    bitsUsers: {
      data: [],
      total: 0
    }
  }
};

export function monetizationReducer(
  state = initialState,
  action: MonetizationType
): IMonetizationState {
  switch (action.type) {
    case TOGGLE_LOAD:
      return {
        ...state,
        load: action.payload
      };
    case HANDLE_FILE_CHOSEN:
      const { data, topRow } = DataPrgMonetization.instance.process(action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          composed: data.composed,
          radar: data.radar,
          line: data.line
        },
        topRow
      };

    case HANDLE_RANGE_PICKER:
      const service = DataPrgMonetization.instance;
      const reProcess = service.process(
        service.reSize(action.payload.data, action.payload.dataIndex)
      );
      return {
        ...state,
        topRow: reProcess.topRow,
        data: {
          ...state.data,
          composed: reProcess.data.composed,
          radar: reProcess.data.radar,
          line: reProcess.data.line
        }
      };
    default:
      return state;
  }
}
