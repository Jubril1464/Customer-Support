/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface IMenu {
  label: string;
  logo: ReactNode;
  name: string;
  selectedLogo: ReactNode;
}

export interface Action<T> {
  type:string;
  payload:T
}
export interface KeyValuePayload {
  key:string;
  value: any;
}