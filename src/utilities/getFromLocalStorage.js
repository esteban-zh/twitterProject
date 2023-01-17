export const getFromLocalStorage = (key) => {
    let value = window.localStorage.getItem(key)
    console.log("parsea", value )
    return JSON.parse(value);
}