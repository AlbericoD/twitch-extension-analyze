import { ITwitchExtensionPrimitiveCSV, CSVkey } from '../components';
import {
  ITopRowMonetization,
  IDataGraphs,
  IParseData,
  IGraphComposed,
  IGraphRadar,
  IGraphLine
} from '../store';
import moment from 'moment';
/**
 * Data Processing Overview
 */
interface IDataCharts {
  composed: IGraphComposed[];
  radar: IGraphRadar[];
  line: IGraphLine[];
}
interface IData {
  data: IDataCharts;
  topRow: ITopRowMonetization;
}
export class DataPrgMonetization {
  private static _instance: DataPrgMonetization = new DataPrgMonetization();

  static get instance(): DataPrgMonetization {
    return DataPrgMonetization._instance;
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
        totalBitsUsed: this._calcTotalBitsused(csv),
        bitsRevenue: this._makeTopRow(csv, 'Bits Revenue USD', false),
        bitsUsedPerUser: this._makeTopRow(csv, 'Bits Used Per User', false),
        bitsUsers: this._makeTopRow(csv, 'Unique Bits Users', false)
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
  private _calcTotalBitsused(
    csv: ITwitchExtensionPrimitiveCSV[]
  ): { bitsUsed: number; bitsTransactions: number; bitsPerTransaction: number } {
    return {
      bitsUsed: this._sum(csv, 'Bits Used', false),
      bitsPerTransaction: this._sum(csv, 'Bits Per Transaction', false),
      bitsTransactions: this._sum(csv, 'Bits Transactions', true)
    };
  }
  private _calcGraphsComposed(csv: ITwitchExtensionPrimitiveCSV[]): IGraphComposed[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        uniqueInteractors: parseInt(value['Unique Interactors']),
        bitsTransactions: parseInt(value['Bits Transactions']),
        bitsUsed: parseFloat(value['Bits Used']),
        bitsUsedPerUser: parseFloat(value['Bits Used Per User'])
      }))
      .reverse();
  }
  private _calcGraphsRadar(csv: ITwitchExtensionPrimitiveCSV[]): IGraphRadar[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        clicksPerInteractor: parseInt(value['Clicks Per Interactor']),
        bitsUsed: parseFloat(value['Bits Used']),
        bitsUsedPerUser: parseFloat(value['Bits Used Per User']),
        uniqueMinimizations: parseInt(value['Unique Minimizers'])
      }))
      .reverse();
  }
  private _calcGraphsLine(csv: ITwitchExtensionPrimitiveCSV[]): IGraphLine[] {
    return csv
      .map(value => ({
        date: moment(value.Date, 'YYYY/MM/DD').format('L'),
        clicksPerInteractor: parseInt(value['Clicks Per Interactor']),
        uniqueMinimizations: parseInt(value['Unique Minimizers']),
        mouseEnterPerView: parseInt(value['Mouseenters Per Viewer']),
        bitsUsed: parseFloat(value['Bits Used']),
        bitsUsedPerUser: parseFloat(value['Bits Used Per User']),
        bitsTransactions: parseInt(value['Bits Transactions'])
      }))
      .reverse();
  }
}
