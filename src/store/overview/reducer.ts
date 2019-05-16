import { IOverviewState, OverviewType } from './types';
import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { DataPrgOverView } from '../../utils';

const initialState: IOverviewState = {
  load: false,
  data: {
    installs: [],
    bits: []
  },
  list: [],
  topRow: {
    activeChannels: {
      activations: 0,
      installs: 0,
      uninstalls: 0
    },
    mouseEnters: {
      total: 0,
      data: []
    },
    renderers: {
      total: 0,
      data: []
    },
    viewers: {
      total: 0,
      data: []
    }
  }
};

export function overviewReducer(state = initialState, action: OverviewType): IOverviewState {
  switch (action.type) {
    case TOGGLE_LOAD:
      return {
        ...state,
        load: action.payload
      };
    case HANDLE_FILE_CHOSEN:
      const { data, topRow, list } = DataPrgOverView.instance.process(action.payload);
      return {
        ...state,
        data,
        list,
        topRow
      };
    case HANDLE_RANGE_PICKER:
      const service = DataPrgOverView.instance;
      const reProcess = service.process(
        service.reSize(action.payload.data, action.payload.dataIndex)
      );
      return {
        ...state,
        data: reProcess.data,
        topRow: reProcess.topRow,
        list: reProcess.list
      };
    default:
      return state;
  }
}
