export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const getValueFromLocalStorage = (key) => {
    return localStorage.getItem(key)
}