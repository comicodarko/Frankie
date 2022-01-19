require('dotenv').config();
const igdb = require('igdb-api-node').default;
const axios = require('axios').default;

module.exports = async (gameSearch) => {
	axios({
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

		const formattedResult = []; 
		search.data.forEach(async result => {
			const { id, name, cover } = result;

			if(cover) {
				const covers = await igdb(process.env.TWITCH_ID, access_token)
					.fields(['url', 'width', 'animated', 'height', 'game'])
					.where(`id = ${cover}`)
					.request('/covers')

				covers.data.forEach(cover => {
					const coverObj = {
						...cover,
						url: cover.url.replace('t_thumb', 't_cover_big')
					} 
					formattedResult.push(coverObj);
					console.log(coverObj);
				});
			}
		})



		// const gameDetail = await igdb(process.env.TWITCH_ID, access_token)
		// .fields(['name'])
		// .search(name)
		// .request('/games');

		// console.log(search.data);
		// console.log(search.data.length);
	});
	
}
