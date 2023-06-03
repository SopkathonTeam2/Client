import axios from 'axios';
import { useGetLetter } from '../../lib/useGetLetter';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
  // default: [
  // {
  //   no: "",
  //   author: "default",
  //   material: "",
  //   name: "",
  //   coverThumb: "",
  // },
  // ],
});

export const userAtom = atom({
  key: 'userAtom',
  default: {
    userId: 0,
    roomId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
