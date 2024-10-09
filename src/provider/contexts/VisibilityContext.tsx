/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, createContext, useContext } from "react";
import { Action, KeyValuePayload } from "@model/interface";
import { ISetModal } from "./type";

const VisibilityContext = createContext<any>(null);

const VisibilityReducer = (state: any, action: Action<KeyValuePayload>) => {
  switch (action.type) {
    case "set-visibility":
      return { ...state, [action.payload.key]: action.payload.value };
  }
};

const VisibilityProvider = (props: any) => {
  const [state, dispatch] = useReducer(VisibilityReducer, {
    isModal: false,
    showOtpModal: false,
    showScreen: "",
    
  });

  async function loader(value: boolean) {
    dispatch({ type: "set-visibility", payload: { key: "isLoading", value } });
  }

  function setModal({ key, value }: ISetModal) {
    dispatch({ type: "set-visibility", payload: { key, value } });
    dispatch({ type: "set-visibility", payload: { key: "isModal", value } });
  }
  function setProperty({ key, value }: ISetModal) {
    dispatch({ type: "set-visibility", payload: { key, value } });
  }

  const stateActions = {
    setModal,
    loader,
    setProperty
  };
  return (
    <VisibilityContext.Provider value={{ visibility: state, ...stateActions }}>
      {props.children}
    </VisibilityContext.Provider>
  );
};

function useVisibility() {
  const context = useContext(VisibilityContext);
  if (context === undefined)
    throw new Error("VisibilityContext was used outside VisibilityProvider");
  return context;
}
export { useVisibility, VisibilityProvider };
