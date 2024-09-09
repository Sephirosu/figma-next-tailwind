import formatSingleDate from "./FormatDateSingle";

const formatDateRange = (start: Date | string, end: Date | string): string => {
  const parseDate = (date: Date | string): Date => {
    if (typeof date === "string") {
      return new Date(date);
    }
    return date;
  };

  const startDate = formatSingleDate(parseDate(start));
  const endDate = formatSingleDate(parseDate(end));

  if (startDate.month === endDate.month) {
    return `${startDate.day}-${endDate.day} ${startDate.month}`;
  } else {
    return `${startDate.day} ${startDate.month} - ${endDate.day} ${endDate.month}`;
  }
};

export default formatDateRange;
