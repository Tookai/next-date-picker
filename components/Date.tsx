import { Button, Popover, PopoverTrigger } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import Picker from "./Picker";

interface IProps {
  date: Dayjs | null;
  dateFor: "afterDate" | "beforeDate";
}

const Date = ({ date, dateFor }: IProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"unstyled"} width={"50%"}>
          {date
            ? dayjs(date).format("dddd DD MMMM")
            : dayjs().format("dddd DD MMMM")}
        </Button>
      </PopoverTrigger>
      <Picker dateFor={dateFor} />
    </Popover>
  );
};

export default Date;
