import { Button, Popover, PopoverTrigger } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";
import Picker from "./Picker";

interface IProps {
  date: Dayjs | null;
  dateFor: "afterDate" | "beforeDate";
}

const Date = ({ date, dateFor }: IProps) => {
  const [recoilDate, setRecoilDate] = useRecoilState(dateStore);

  const handleClick = () => {
    if (dateFor === "afterDate") {
      setRecoilDate({
        ...recoilDate,
        afterDate: null,
      });
    }

    if (dateFor === "beforeDate") {
      setRecoilDate({
        ...recoilDate,
        beforeDate: null,
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"unstyled"} width={"50%"}>
          {date
            ? dayjs(date).format("dddd DD MMMM")
            : dayjs().format("dddd DD MMMM")}
        </Button>
      </PopoverTrigger>
      <Button onClick={handleClick} variant={"ghost"}>
        x
      </Button>
      <Picker dateFor={dateFor} />
    </Popover>
  );
};

export default Date;
