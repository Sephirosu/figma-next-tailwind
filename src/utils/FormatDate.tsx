const formatDate = (
  date: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    timeZone: timeZone,
  };

  const d = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("en-US", options).format(d);
};

export default formatDate;
