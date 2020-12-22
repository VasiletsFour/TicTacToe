export const setMultiplay = (arg:boolean) => window.localStorage.setItem("multiplay", String(arg))
export const getMultiplay = () => window.localStorage.getItem("multiplay")
export const removeMultiplay = ()=> window.localStorage.removeItem("multiplay")