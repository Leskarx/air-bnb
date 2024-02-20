import { createContext,useContext } from "react";
const popOutContext=createContext({
    isOpen:false,
    toggleIsOpen:()=>{},
    openSection:"login",
    toggleOpenSection:()=>{}

})

export const PopOutprovider=popOutContext.Provider
export function usePopOut(){
    return useContext(popOutContext)
}