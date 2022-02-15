export type WASectionOption = {
  title: string;
  rowId: string;
  description?: string;
}

export type WASection = {
  title: string;
  rows: WASectionOption[];
}