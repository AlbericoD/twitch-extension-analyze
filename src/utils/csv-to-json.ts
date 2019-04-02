import { ITwitchExtensionPrimitiveCSV } from '../components';

export const csvToJSON = (csv: string): ITwitchExtensionPrimitiveCSV[] => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  let result: ITwitchExtensionPrimitiveCSV[] = [];

  for (let i = 1; i < lines.length - 1; i++) {
    let obj: any = {};
    let currentline = lines[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      if (currentline[j] !== undefined && currentline[j] !== '') obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};
