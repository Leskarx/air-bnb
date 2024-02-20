import { createContext,useContext } from "react";
const popOutContext=createContext({
    isOpen:false,
    toggleIsOpen:()=>{}

})

export const PopOutprovider=popOutContext.Provider
export function usePopOut(){
    return useContext(popOutContext)
}