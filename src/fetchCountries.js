
export function fetchCountries({name, capital, population, flags, languages}) {
const valueInput = `https://restcountries.com/v2/all?fields=${name},${capital},${population},${flags},${languages}`;
    fetch(valueInput).then(res => {

        if(!res.ok) {
            throw new Error(res.status)
        }

        return res.json()
    })
    
}
 