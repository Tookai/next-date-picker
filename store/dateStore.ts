import dayjs, { Dayjs } from "dayjs";
import { atom } from "recoil";

interface IStore {
  beforeDate: Dayjs | null;
  afterDate: Dayjs | null;
  currentDate: Dayjs;
}

export const dateStore = atom({
  key: "dateStore",
  default: {
    beforeDate: null,
    afterDate: null,
    currentDate: dayjs(),
  } as IStore,
});
