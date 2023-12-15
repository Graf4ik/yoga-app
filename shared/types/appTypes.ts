export type Primitive = string | number | boolean | null | undefined;
export type DataValue = Primitive | Primitive[] | DataState | DataStateItem[];
export type DataState = {
  [key: string]: DataStateItem[] | undefined
};
export interface DataStateItem {
  id?: string;
  [key: string]: DataValue
}
export type EnumType<T> = {
  [K in keyof T]: T[K];
};
