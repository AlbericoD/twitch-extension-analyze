import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { ITwitchExtensionPrimitiveCSV } from '../../components';

interface IDataGraphs {
  date: string;
  value: number | string;
}
interface IMiniGraphs {
  total: number;
  data: IDataGraphs[];
}
export interface ITopRowOverview {
  activeChannels: {
    installs: number;
    uninstalls: number;
    activations: number;
  };
  renderers: IMiniGraphs;
  viewers: IMiniGraphs;
  mouseEnters: IMiniGraphs;
}
export interface IGraphBits {
  date: string;
  bitsUsed: number;
  bitsTransactions: number;
  bitsUsedPerUser: number;
}
export interface IGraph {
  date: string;
  uniquePageVisits: number;
  installs: number;
  uninstalls: number;
  activations: number;
}
export interface IListOverview {
  key: number;
  date: string;
  'ext-details': number;
  'ext-unique-details': number;
  'bits-revenue': number;
  'bits-per-transaction': number;
}
interface IParseData {
  initialDateIndex: number;
  lastDateIndex: number;
}
export interface IOverviewState {
  load: boolean;
  data: {
    installs: IGraph[] | null;
    bits: IGraphBits[] | null;
  };

  topRow: ITopRowOverview;
  list: IListOverview[];
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

export type OverviewType = IToggleLoad | IProcess | ISetDataRange;
