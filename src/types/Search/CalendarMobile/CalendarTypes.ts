export interface CalendarProps {
  setStartDate: (date: Date) => void;
  closeModal: () => void;
}

export interface CalendarRowProps {
  firstDay: number;
  lastDayInMonth: number;
  row: number;
  currentMonth: number;
  currentYear: number;
  setStartDate: (date: Date) => void;
  closeModal: () => void;
  minDate: Date;
}
