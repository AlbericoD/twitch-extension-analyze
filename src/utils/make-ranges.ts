import { ITwitchExtensionPrimitiveCSV } from '../components';
import { RangePickerPresetRange } from 'antd/lib/date-picker/interface';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

interface IRange {
  [range: string]: RangePickerPresetRange;
}

const checkData = (data: ITwitchExtensionPrimitiveCSV[], length: number): boolean =>
  data.length >= 0 && data.length >= length;

const makeData = (dateInitial: string, dateFinal: string): RangePickerPresetRange => [
  moment(dateInitial, dateFormat),
  moment(dateFinal, dateFormat)
];

export const makeRanges = (data: ITwitchExtensionPrimitiveCSV[]): IRange => {
  const ranges: IRange = {
    'Last Day': makeData(data[0].Date, data[0].Date)
  };
  const intervals = [3, 7, 15, 30, 45, 60, 90, 120, 180, 240];
  intervals.forEach(interval => {
    if (checkData(data, interval))
      ranges[`Last ${interval} Days`] = makeData(data[interval - 1].Date, data[0].Date);
  });
  ranges['First Extension Release - Last Date CSV'] = makeData(
    data[data.length - 1].Date,
    data[0].Date
  );
  return ranges;
};
