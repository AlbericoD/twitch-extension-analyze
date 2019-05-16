import { ITwitchExtensionPrimitiveCSV, CSVkey } from '../components';
import {
  IGraph,
  IGraphBits,
  ITopRowOverview,
  IDataGraphs,
  IListOverview,
  IParseData
} from '../store';
import moment from 'moment';
/**
 * Data Processing Overview
 */
interface IDataCharts {
  installs: IGraph[];
  bits: IGraphBits[];
}
interface IData {
  data: IDataCharts;
  topRow: ITopRowOverview;
  list: IListOverview[];
}
export class DataPrgOverView {
  private static _instance: DataPrgOverView = new DataPrgOverView();

  static get instance(): DataPrgOverView {
    return DataPrgOverView._instance;
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
        installs: this._calcGraphsInstalls(csv),
        bits: this._calcGraphsBits(csv)
      },
      list: this._makeList(csv),
      topRow: {
        activeChannels: this._calcActiveChannels(csv),
        mouseEnters: {
          total: this._sum(csv, 'Unique Mouseenters'),
          data: this._makeData(csv, 'Unique Mouseenters')
        },
        renderers: {
          total: this._sum(csv, 'Unique Interactors'),
          data: this._makeData(csv, 'Unique Interactors')
        },
        viewers: {
          total: this._sum(csv, 'Unique Viewers'),
          data: this._makeData(csv, 'Unique Viewers')
        }
      }
    };
    return data;
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
  private _makeList(csv: ITwitchExtensionPrimitiveCSV[]): IListOverview[] {
    return csv.map((value, index) => ({
      key: index,
      date: moment(value.Date, 'YYYY/MM/DD').format('L'),
      'ext-details': parseInt(value['Extension Details Page Visits']),
      'ext-unique-details': parseInt(value['Unique Extension Details Page Visits']),
      'bits-revenue': parseFloat(value['Bits Revenue USD']),
      'bits-per-transaction': parseFloat(value['Bits Per Transaction'])
    }));
  }
  private _sum(csv: ITwitchExtensionPrimitiveCSV[], property: CSVkey): number {
    return csv
      .map(item => parseInt(item[property]))
      .reduce((previous, current) => previous + current, 0);
  }
  private _calcActiveChannels(
    csv: ITwitchExtensionPrimitiveCSV[]
  ): { activations: number; installs: number; uninstalls: number } {
    return {
      activations: this._sum(csv, 'Unique Active Channels'),
      installs: this._sum(csv, 'Installs'),
      uninstalls: this._sum(csv, 'Uninstalls')
    };
  }
  private _calcGraphsInstalls(csv: ITwitchExtensionPrimitiveCSV[]): IGraph[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        activations: parseInt(value.Activations),
        installs: parseInt(value.Installs),
        uninstalls: parseInt(value.Uninstalls),
        uniquePageVisits: parseInt(value['Unique Extension Details Page Visits'])
      }))
      .reverse();
  }
  private _calcGraphsBits(csv: ITwitchExtensionPrimitiveCSV[]): IGraphBits[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        bitsUsed: parseInt(value['Bits Used']),
        bitsTransactions: parseInt(value['Bits Transactions']),
        bitsUsedPerUser: parseFloat(value['Bits Used Per User'])
      }))
      .reverse();
  }
}
