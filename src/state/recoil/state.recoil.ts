import { IModal } from '@ts/interfaces';
import { atom } from 'recoil';

type ModalState = { open: boolean; title: string; content: IModal | null };

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: { open: false, title: '', content: null },
});
