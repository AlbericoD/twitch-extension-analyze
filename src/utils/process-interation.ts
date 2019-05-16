import { ITwitchExtensionPrimitiveCSV, CSVkey } from '../components';
import {
  ITopRowInteraction,
  IDataGraphs,
  IParseData,
  IGraphRadarInteraction,
  IGraphLineInteraction,
  IGraphComposedInteraction
} from '../store';
import moment from 'moment';
/**
 * Data Processing Overview
 */
interface IDataCharts {
  composed: IGraphComposedInteraction[];
  radar: IGraphRadarInteraction[];
  line: IGraphLineInteraction[];
}
interface IData {
  data: IDataCharts;
  topRow: ITopRowInteraction;
}
export class DataPrgInteration {
  private static _instance: DataPrgInteration = new DataPrgInteration();

  static get instance(): DataPrgInteration {
    return DataPrgInteration._instance;
  }
  public reSize(
    csv: ITwitchExtensionPrimitiveCSV[] | null,
    dateRange: IParseData
  ): ITwitchExtensionPrimitiveCSV[] {
    if (csv !== null && dateRange.lastDateIndex === 0 && dateRange.initialDateIndex === 0)
      return [csv[0]];
    else if (csv !== null) return csv.slice(dateRange.initialDateIndex, dateRange.lastDateIndex);
    else return [];
  }

  public process(csv: ITwitchExtensionPrimitiveCSV[]): IData {
    const data: IData = {
      data: {
        composed: this._calcGraphsComposed(csv),
        radar: this._calcGraphsRadar(csv),
        line: this._calcGraphsLine(csv)
      },
      topRow: {
        uniqueRenderers: this._calcUniqueRenderers(csv),
        interactionRate: this._makeTopRow(csv, 'Interaction Rate', false),
        minimizationRate: this._makeTopRow(csv, 'Minimization Rate', false),
        unminimization: this._makeTopRow(csv, 'Unminimization Rate', false)
      }
    };
    return data;
  }
  private _makeTopRow(
    csv: ITwitchExtensionPrimitiveCSV[],
    property: CSVkey,
    int: boolean
  ): { total: number; data: IDataGraphs[] } {
    return {
      total: this._sum(csv, property, int),
      data: this._makeData(csv, property)
    };
  }
  private _makeData(csv: ITwitchExtensionPrimitiveCSV[], property: CSVkey): IDataGraphs[] {
    return csv
      .map(value => {
        return {
          date: moment(value.Date, 'YYYY/MM/DD').format('L'),
          value: parseInt(value[property])
        };
      })
      .reverse();
  }
  private _sum(csv: ITwitchExtensionPrimitiveCSV[], property: CSVkey, int: boolean): number {
    return csv
      .map(item => {
        if (int) return parseInt(item[property]) || 0;
        return parseFloat(item[property]) || 0;
      })
      .reduce((previous, current) => previous + current, 0);
  }
  private _calcUniqueRenderers(
    csv: ITwitchExtensionPrimitiveCSV[]
  ): { totalUniqueRenderes: number; uniqueViewers: number; uniqueMinimizers: number } {
    return {
      totalUniqueRenderes: this._sum(csv, 'Unique Renderers', true),
      uniqueViewers: this._sum(csv, 'Unique Viewers', true),
      uniqueMinimizers: this._sum(csv, 'Unique Minimizers', true)
    };
  }
  private _calcGraphsComposed(csv: ITwitchExtensionPrimitiveCSV[]): IGraphComposedInteraction[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        uniqueInteractors: parseInt(value['Unique Interactors']),
        interactionRate: parseFloat(value['Interaction Rate']),
        minimizationRate: parseFloat(value['Minimization Rate']),
        unminimizationRate: parseFloat(value['Unminimization Rate'])
      }))
      .reverse();
  }
  private _calcGraphsRadar(csv: ITwitchExtensionPrimitiveCSV[]): IGraphRadarInteraction[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        clicks: parseInt(value.Clicks),
        clicksPerInteractor: parseInt(value['Clicks Per Interactor']),
        mouseEnters: parseInt(value.Mouseenters),
        mouseentersPerViewer: parseInt(value['Mouseenters Per Viewer'])
      }))
      .reverse();
  }
  private _calcGraphsLine(csv: ITwitchExtensionPrimitiveCSV[]): IGraphLineInteraction[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        clicksPerInteractor: parseInt(value['Clicks Per Interactor']),
        mouseEntersPerView: parseInt(value['Mouseenters Per Viewer']),
        uniqueInteractors: parseInt(value['Unique Interactors']),
        clicks: parseInt(value.Clicks),
        mouseEnters: parseInt(value.Mouseenters),
        minimizations: parseInt(value.Minimizations)
      }))
      .reverse();
  }
}
