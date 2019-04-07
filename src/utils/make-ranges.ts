import { ITwitchExtensionPrimitiveCSV } from '../components';
import { RangePickerPresetRange } from 'antd/lib/date-picker/interface';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

interface IRange {
  [range: string]: RangePickerPresetRange;
}
export const makeRanges = (data: ITwitchExtensionPrimitiveCSV[]): IRange => {
  if (data.length >= 0 && data.length <= 6) {
    return {
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ],
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[6].Date, dateFormat), moment(data[0].Date, dateFormat)]
    };
  } else if (data.length >= 0 && data.length >= 29) {
    return {
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ],
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 7 Days': [moment(data[6].Date, dateFormat), moment(data[0].Date, dateFormat)],
      'Last 30 Days': [moment(data[29].Date, dateFormat), moment(data[0].Date, dateFormat)]
    };
  } else {
    return {
      'First Extension Release - Last Date CSV': [
        moment(data[data.length - 1].Date, dateFormat),
        moment(data[0].Date, dateFormat)
      ],
      'Last Day': [moment(data[0].Date, dateFormat), moment(data[0].Date, dateFormat)]
    };
  }
};
