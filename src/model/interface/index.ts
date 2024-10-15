/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export interface IUser {
  label: string;
  logo: ReactNode;
  name: string;
  selectedLogo: ReactNode;
}
export interface IMenu {
  logo: ReactNode;
  name: string;
  selectedLogo: ReactNode;
  link: string
}

export interface Action<T> {
  type:string;
  payload:T
}
export interface KeyValuePayload {
  key:string;
  value: any;
}
export interface ValidatorResponse {
  isValidated: boolean;
  message: string;
}
