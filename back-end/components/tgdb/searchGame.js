require('dotenv').config();
const igdb = require('igdb-api-node').default;
const axios = require('axios').default;

module.exports = async (gameSearch) => {
	return axios({
		url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
		method: 'POST',
	}).then(async res => {
		const { access_token } = res.data;	

		const search = await igdb(process.env.TWITCH_ID, access_token)
			.fields([
				'name', 'artworks', 'alternative_names', 'aggregated_rating', 'involved_companies', 'aggregated_rating_count', 'bundles', 
				'collection', 'cover', 'dlcs', 'expanded_games', 'expansions', 'first_release_date', 
				'franchise', 'genres', 'keywords', 'parent_game', 'platforms', 'total_rating', 'total_rating_count',
				'storyline', 'url', 'summary', 'videos'
			])
			.search(gameSearch)
			// .where('category = 0 | category = 10')
			.request('/games');

		const promises = search.data.map(async result => {
			const { cover } = result;

			return new Promise(async (resolve) => {
				if(cover) {
					const covers = await igdb(process.env.TWITCH_ID, access_token)
						.fields(['url', 'width', 'animated', 'height', 'game'])
						.where(`id = ${cover}`)
						.request('/covers')
	 
					resolve({
						...result,	
						cover: covers.data[0].url.replace('t_thumb', 't_cover_big')
					}); 
				} else {
					resolve(result);
				}
			})
		});

		const games = [];
		return Promise.all(promises).then((result) => {
			games.push(result);
		}).then(() => {
			return {
				message: 'Encontrei alguns jogos',
				games
			};
		})
	});
	
}
