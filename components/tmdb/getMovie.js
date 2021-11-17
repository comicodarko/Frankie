require('dotenv').config();
const { default: axios } = require("axios");

module.exports = async (movie) => {
    return axios.get(`https://api.themoviedb.org/4/search/movie`, {
        params: {
            api_key: process.env.TMDB_API_KEY,
            language: 'pt-BR',
            query: movie,
        }
    }).then(res => {
        if(res.data.results.length > 0) {
            return axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[0].id}`, {
                params: { api_key: process.env.TMDB_API_KEY, language: 'pt-BR', }
            }).then(async res => {
                const { title,  genres, original_title, runtime, release_date, 
                    imdb_id, budget, poster_path, backdrop_path, status, tagline, overview} = res.data;
                    
                return { title,  genres, original_title, runtime, release_date,
                    imdb_id, budget, poster_path, backdrop_path, status, tagline, overview };
            })
        } else {
            return false
        }
    })   
}