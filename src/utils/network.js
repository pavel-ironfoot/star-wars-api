import { HTTP, HTTPS } from "../constants/api";
/**
 * change url http for https
 * @param {String} url - url for change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * 
 * @param {*} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource =async(url)=>{
  try{
        const res = await fetch(url);
        if(!res.ok){
            console.error('Could not fetch',res.status);
            return false;
        }
        return await res.json();
    }catch(error){
        console.log('Could not fetch',error.message);
        return false;
    }
}

//промисы можно так и оставить, но с асинк ф легче работать
// export const getApiResource =(url)=>{
//     fetch(url)
//         .then(res=>res.json())
//         .then(body=>console.log(body))
//         .catch(error=>console.log(error.message))
// }
// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body=>console.log(body))

// (async()=>{
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();   



