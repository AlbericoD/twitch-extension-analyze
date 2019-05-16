import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from './constants';
import { ITwitchExtensionPrimitiveCSV } from '../../components/types';

export interface IParseData {
  initialDateIndex: number;
  lastDateIndex: number;
}
export interface ICSVState {
  fileReader: FileReader;
  data: ITwitchExtensionPrimitiveCSV[] | null;
  load: boolean;
  uploadCSV: boolean;
  name: string;
  initialDateIndex: number;
  lastDateIndex: number;
}

interface IToggleLoad {
  type: typeof TOGGLE_LOAD;
  payload: boolean;
}
interface ISetNewFile {
  type: typeof HANDLE_FILE_CHOSEN;
  payload: ITwitchExtensionPrimitiveCSV[];
}
interface ISetDataRange {
  type: typeof HANDLE_RANGE_PICKER;
  payload: { dataIndex: IParseData; data: ITwitchExtensionPrimitiveCSV[] };
}
export type CSVActionsType = IToggleLoad | ISetNewFile | ISetDataRange;
