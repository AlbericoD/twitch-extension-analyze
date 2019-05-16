import { IInteractionState, InteractionType } from './types';
import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { DataPrgInteration } from '../../utils';

const initialState: IInteractionState = {
  load: false,
  data: {
    composed: [],
    line: [],
    radar: []
  },
  topRow: {
    uniqueRenderers: {
      totalUniqueRenderes: 0,
      uniqueMinimizers: 0,
      uniqueViewers: 0
    },
    interactionRate: {
      total: 0,
      data: []
    },
    minimizationRate: {
      total: 0,
      data: []
    },
    unminimization: {
      total: 0,
      data: []
    }
  }
};

export function interactionReducer(
  state = initialState,
  action: InteractionType
): IInteractionState {
  switch (action.type) {
    case TOGGLE_LOAD:
      return {
        ...state,
        load: action.payload
      };
    case HANDLE_FILE_CHOSEN:
      const { data, topRow } = DataPrgInteration.instance.process(action.payload);
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
      const service = DataPrgInteration.instance;
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
