import { SET_PROPERTY } from './constants';
import { ISetPropertyPayload } from './types';
import { ITwitchExtensionPrimitiveCSV } from '../../components';
export function setProperty(props: ISetPropertyPayload & { csv: ITwitchExtensionPrimitiveCSV[] }) {
  return {
    type: SET_PROPERTY,
    payload: props
  };
}
