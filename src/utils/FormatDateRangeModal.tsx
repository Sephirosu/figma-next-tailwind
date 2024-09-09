const formatDateRange = (
  startDate: string | Date,
  endDate: string | Date
): string => {
  const parseDate = (date: string | Date): Date => {
    return typeof date === "string" ? new Date(date) : date;
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedStartDate = new Intl.DateTimeFormat("en-US", options).format(
    start
  );
  const formattedEndDate = new Intl.DateTimeFormat("en-US", options).format(
    end
  );

  if (
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear()
  ) {
    return `${formattedStartDate} - ${end.getDate()}`;
  }

  return `${formattedStartDate} – ${formattedEndDate}`;
};

export default formatDateRange;
