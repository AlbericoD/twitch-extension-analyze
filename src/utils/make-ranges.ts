import { ITwitchExtensionPrimitiveCSV } from '../components';
import { RangePickerPresetRange } from 'antd/lib/date-picker/interface';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

interface IRange {
  [range: string]: RangePickerPresetRange;
}
export const makeRanges = (data: ITwitchExtensionPrimitiveCSV[]): IRange => {
  if (data.length >= 0 && data.length >= 120) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[30].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 45 Days': [moment(data[45].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 60 Days': [moment(data[60].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 90 Days': [moment(data[90].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 120 Days': [moment(data[120].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 90) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[30].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 45 Days': [moment(data[45].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 60 Days': [moment(data[60].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 90 Days': [moment(data[90].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 60) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[30].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 45 Days': [moment(data[45].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 60 Days': [moment(data[60].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 45) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[30].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 45 Days': [moment(data[45].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 30) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[30].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 15) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 15 Days': [moment(data[15].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 7) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[7].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else if (data.length >= 0 && data.length >= 3) {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 3 Days': [moment(data[3].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  } else {
    return {
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ]
    };
  }
};
