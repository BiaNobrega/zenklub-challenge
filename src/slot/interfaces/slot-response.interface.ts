export interface ProfessionalSlot {
  date: Date;
  slots: Slot[];
}

export interface Slot {
  hour: string;
  isAvailable: boolean;
}
