
export function fetchCountries(name) {
const urlApi = `https://restcountries.com/v3.1/name/`;
const apiAndEnpoints = `?fields=name,capital,population,flags,languages`;
     return fetch(`${urlApi}${name}${apiAndEnpoints}`).then(res => {

        if(!res.ok) {
            throw new Error(res.status)
        }

        return res.json()
    })
    
}
 