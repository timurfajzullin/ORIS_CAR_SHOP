export const fetchData = async () => {
    try
    {
        return fetch("http://localhost:5173/catalog")
        .then(response => response.json())
    }
    catch(error){
        console.log(error + "rrerererere")
    }
}