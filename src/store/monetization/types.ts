import { TOGGLE_LOAD, HANDLE_FILE_CHOSEN, HANDLE_RANGE_PICKER } from '../csv/constants';
import { ITwitchExtensionPrimitiveCSV } from '../../components';

export interface IDataGraphs {
  date: string;
  value: number | string;
}
export interface IMiniGraphs {
  total: number;
  data: IDataGraphs[];
}
export interface ITopRowMonetization {
  totalBitsUsed: {
    bitsUsed: number;
    bitsTransactions: number;
    bitsPerTransaction: number;
  };
  bitsRevenue: IMiniGraphs;
  bitsUsedPerUser: IMiniGraphs;
  bitsUsers: IMiniGraphs;
}
export interface IGraphComposed {
  date: string;
  uniqueInteractors: number;
  bitsTransactions: number;
  bitsUsed: number;
  bitsUsedPerUser: number;
}
export interface IGraphRadar {
  date: string;

  clicksPerInteractor: number;
  bitsUsed: number;
  bitsUsedPerUser: number;
  uniqueMinimizations: number;
}
export interface IGraphLine {
  date: string;
  clicksPerInteractor: number;
  uniqueMinimizations: number;
  mouseEnterPerView: number;
  bitsUsed: number;
  bitsUsedPerUser: number;
  bitsTransactions: number;
}
interface IParseData {
  initialDateIndex: number;
  lastDateIndex: number;
}
export interface IMonetizationGraphs {
  composed: IGraphComposed[];
  radar: IGraphRadar[];
  line: IGraphLine[];
}
export interface IMonetizationState {
  load: boolean;
  data: IMonetizationGraphs;
  topRow: ITopRowMonetization;
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

export type MonetizationType = IToggleLoad | IProcess | ISetDataRange;
