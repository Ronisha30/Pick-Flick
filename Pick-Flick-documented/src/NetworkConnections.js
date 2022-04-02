export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMoviesFromDatabase = (route, params = '') => {
	console.log(params);
	console.log(route);
	return fetch(`https://api.themoviedb.org/3/${route}?api_key=${API_KEY}${params}`).then((res) => res.json());
};
