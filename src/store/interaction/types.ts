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
export interface ITopRowInteraction {
  uniqueRenderers: {
    totalUniqueRenderes: number;
    uniqueViewers: number;
    uniqueMinimizers: number;
  };
  interactionRate: IMiniGraphs;
  minimizationRate: IMiniGraphs;
  unminimization: IMiniGraphs;
}
export interface IGraphComposedInteraction {
  date: string;
  uniqueInteractors: number;
  interactionRate: number;
  minimizationRate: number;
  unminimizationRate: number;
}
export interface IGraphRadarInteraction {
  date: string;

  clicks: number;
  clicksPerInteractor: number;
  mouseEnters: number;
  mouseentersPerViewer: number;
}
export interface IGraphLineInteraction {
  date: string;
  clicksPerInteractor: number;
  mouseEntersPerView: number;
  uniqueInteractors: number;
  clicks: number;
  mouseEnters: number;
  minimizations: number;
}
interface IParseData {
  initialDateIndex: number;
  lastDateIndex: number;
}
export interface IInteractionGraphs {
  composed: IGraphComposedInteraction[];
  radar: IGraphRadarInteraction[];
  line: IGraphLineInteraction[];
}
export interface IInteractionState {
  load: boolean;
  data: IInteractionGraphs;
  topRow: ITopRowInteraction;
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

export type InteractionType = IToggleLoad | IProcess | ISetDataRange;
