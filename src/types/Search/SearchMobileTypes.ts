export interface ConfirmButtonProps {
  handleConfirm: () => void;
}

export interface DateModalProps {
  title: string;
  date: Date | null;
  setDate: (date: Date | null) => void;
}

export interface ModalCounterProps {
  label: string;
  description: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  maxTotal: number;
  totalGuests: number;
}

export interface ModalCounterAdultsProps {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface ModalCounterChildrenProps {
  child: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface ModalCounterInfantsProps {
  infants: number;
  setInfants: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

export interface ModalCounterPetsProps {
  pets: number;
  setPets: React.Dispatch<React.SetStateAction<number>>;
  totalGuests: number;
  maxTotal: number;
}

