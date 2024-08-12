import formatSingleDate from "./FormatDateSingle";

const formatDateRange = (start: Date | string, end: Date | string): string => {
  const startDate = formatSingleDate(start);
  const endDate = formatSingleDate(end);

  if (startDate.month === endDate.month) {
    return `${startDate.day}-${endDate.day} ${startDate.month}`;
  } else {
    return `${startDate.day} ${startDate.month} - ${endDate.day} ${endDate.month}`;
  }
};

export default formatDateRange;
