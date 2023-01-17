import { createContext } from "react";
import { getFromLocalStorage } from "../utilities/getFromLocalStorage.js"

export const TwContext = createContext({});

export const TweetsContext = ({children}) => {
    const tweets = getFromLocalStorage("my-tweet")
    console.log("tweets en context", tweets)
    return (
        <TwContext.Provider value={"tweet"}>
            {children}
        </TwContext.Provider>
    )
}