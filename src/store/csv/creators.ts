import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from './constants';
import { ITwitchExtensionPrimitiveCSV } from '../../components';
import { IParseData } from './types';
export function toggleLoad(load: boolean) {
  return {
    type: TOGGLE_LOAD,
    payload: load
  };
}
export function handleFileChosen(file: ITwitchExtensionPrimitiveCSV[]) {
  return {
    type: HANDLE_FILE_CHOSEN,
    payload: file
  };
}
export function handleDataChosen(dataIndex: IParseData, data: ITwitchExtensionPrimitiveCSV[]) {
  return {
    type: HANDLE_RANGE_PICKER,
    payload: { dataIndex, data }
  };
}
