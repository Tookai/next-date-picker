import dayjs from "dayjs";

// get every day of the month with dayjs
export const getDaysInMonth = (date: Date): Date[] => {
  const start = dayjs(date).startOf("month");
  const end = dayjs(date).endOf("month");

  // get every day between start and end
  const days = [];
  while (start.isBefore(end)) {
    days.push(start.toDate());
    start.add(1, "day");
  }

  return days;
};
