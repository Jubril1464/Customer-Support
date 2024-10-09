/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, createContext, useContext } from "react";
import { Action, KeyValuePayload } from "../../model/interface";

const initialState = {
  userType: "",
  forgotEmail: "",
};

export const AppContext = createContext<any>(null);

const AppReducer = (state: any, action: Action<KeyValuePayload>) => {
  switch (action.type) {
    case "set-property":
      return { ...state, [action.payload.key]: action.payload.value };
    case "clear-data":
      return { ...initialState };
  }
};

const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, { ...initialState });

  async function setInfoProperty(key: string, value: any) {
    const isString = typeof value === "string" ? true : false;
    const isNumber = typeof value === "number" ? true : false;
    localStorage.setItem(
      key,
      isString ? value : isNumber ? String(value) : JSON.stringify(value)
    );
    await dispatch({ type: "set-property", payload: { key, value } });
  }

  async function recoverAppData() {
    for (const item of Object.keys(initialState)) {
      let retrievedData = localStorage.getItem(item)!;
      retrievedData = ["number", "string"].includes(typeof state[item])
        ? retrievedData
        : !["null", "undefined"].includes(retrievedData)
        ? JSON.parse(retrievedData)
        : state[item];
    }
  }
  async function clearAppData() {
    await dispatch({ type: "clear-data", payload: { key: "", value: "" } });
  }
  async function recoverStatesData() {
    await recoverAppData();
  }

  const stateActions = {
    recoverStatesData,
    clearAppData,
    setInfoProperty,
  };

  return (
    <AppContext.Provider value={{ info: state, ...stateActions }}>
      {props.children}
    </AppContext.Provider>
  );
};

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of AppProvider");
  return context;
}
export { useApp, AppProvider };
