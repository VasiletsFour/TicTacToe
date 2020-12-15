export const getIpHelper=()=>{
    return fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => data);
}