import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { SET_PROPERTY } from './constants';
import { ITwitchExtensionPrimitiveCSV, CSVkey } from '../../components';

export interface ITopRowManualBuild {
  id: number;
  name: CSVkey | '';
  value: number;
}
export interface IGraphBuild {
  date: number | string;
  [key: string]: number | string;
}
interface IParseData {
  initialDateIndex: number;
  lastDateIndex: number;
}

export interface IManualBuildState {
  load: boolean;
  data: IGraphBuild[];
  topRow: ITopRowManualBuild[];
}

interface IToggleLoad {
  type: typeof TOGGLE_LOAD;
  payload: boolean;
}
interface IProcess {
  type: typeof HANDLE_FILE_CHOSEN;
  payload: ITwitchExtensionPrimitiveCSV[];
}
interface ISetDataRange {
  type: typeof HANDLE_RANGE_PICKER;
  payload: { dataIndex: IParseData; data: ITwitchExtensionPrimitiveCSV[] };
}
export interface ISetPropertyPayload {
  property: CSVkey;
  position: number;
}
interface ISetProperty {
  type: typeof SET_PROPERTY;
  payload: ISetPropertyPayload & { csv: ITwitchExtensionPrimitiveCSV[] };
}
export type ManualBuildType = IToggleLoad | IProcess | ISetDataRange | ISetProperty;
