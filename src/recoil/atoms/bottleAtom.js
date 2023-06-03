import axios from 'axios';
import { useGetLetter } from '../useGetLetter';
import { atom, selector } from 'recoil';

export const bottleAtom = atom({
  key: 'bottleState',
  default: selector({
    key: 'bottleAtom/default',
    get: () => {
      const bottles = useGetLetter();
      console.log(bottles);
      return bottles;
    },
  }),
});
