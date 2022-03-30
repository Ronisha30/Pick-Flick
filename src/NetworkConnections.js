 export const API_KEY= '18c4f3578c5a90e153d907f76291ac9d'

 export const fetchMoviesFromDatabase = (route, params ='')=>{
    console.log(params)
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}${params}`).then(res => res.json())
 }