import formatDate from "./FormatDate";

const formatSingleDate = (
  date: Date | string
): { day: string; month: string } => {
  const formattedDate = formatDate(date);
  const [month, day] = formattedDate.split(", ")[0].split(" ");
  return { day, month };
};

export default formatSingleDate;
