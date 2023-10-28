import { atom } from 'recoil';
import { v4 } from 'uuid';

export const mobileMenuAtom = atom({
  key: v4(),
  default: false as boolean,
});
