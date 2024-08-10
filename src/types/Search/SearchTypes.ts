export interface CounterProps {
  label: string;
  description: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  maxTotal: number;
  totalGuests: number;
}

export interface CounterAdultsProps {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface CounterChildrenProps {
  child: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}
export interface CounterInfantsProps {
  infants: number;
  setInfants: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface CounterPetsProps {
  pets: number;
  setPets: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface CustomInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  placeholder?: string;
}

export interface DatePickerCalendarProps {
  placeholder?: string;
  dateFormat?: string;
  className?: string;
  onChange?: (date: string | (string | null)[] | null) => void;
  selectedDate?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  startDate?: Date;
  endDate?: Date;
  showTimeSelect?: boolean;
  timeFormat?: string;
  timeIntervals?: number;
  isClearable?: boolean;
}

export interface WhoOpenProps {
  closeWho: () => void;
  setTotal: (total: number) => void;
}
