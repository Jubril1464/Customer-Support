import { ValidatorResponse } from "@model/interface";
import {splitCamelCase} from "../utils/utility";
export const inputValidator = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  exemptedPropertes?: string[]
): ValidatorResponse => {
  const result = <ValidatorResponse>{ isValidated: true };
  for (const key in data) {
    if (!data[key] && !exemptedPropertes?.includes(key)) {
      result.isValidated = false;
      result.message = `Input: Kindly provide "${splitCamelCase(
        key,
        true
      )}"`;
      break;
    }
  }
  console.log({ result });
  return result;
};



export const getCurrentPage = () => {
  // eslint-disable-next-line no-constant-binary-expression, valid-typeof
  if (typeof window !== undefined) {
    return window.location.pathname.split("/").pop();
  }
};
