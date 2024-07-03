import { createContext, useContext } from "react";

export const InputContext = createContext();

export const InputContextProvider = InputContext.Provider;

export default function useInput(){
    return useContext(InputContext)
}