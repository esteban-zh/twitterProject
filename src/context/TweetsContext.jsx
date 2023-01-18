import { createContext } from "react";
import { getFromLocalStorage } from "../utilities/getFromLocalStorage.js"

export const TwContext = createContext({});

export const TweetsContext = ({children}) => {
    const tweets = getFromLocalStorage("my-tweet")
    return (
        <TwContext.Provider value={tweets}>
            {children}
        </TwContext.Provider>
    )
}