import { atom } from 'recoil';
import { v4 } from 'uuid';

interface IModal {
  active: boolean;
  type: string | null;
}

export const modalAtom = atom({
  key: v4(),
  default: { active: false, type: null } as IModal,
});
