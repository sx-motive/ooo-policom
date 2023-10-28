import { atom } from 'recoil';
import { v4 } from 'uuid';

export interface IService {
  label: string;
  value: string;
}

export const serviceAtom = atom({
  key: v4(),
  default: { label: '', value: '' } as IService,
});
