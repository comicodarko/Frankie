const { Sticker, StickerTypes } = require('wa-sticker-formatter');

module.exports = async (media) => {
	const sticker = await new Sticker(media, {
		pack: 'Frankie - Sticker',
		author: 'Frankie',
		type: StickerTypes.DEFAULT,
		categories: ['👋'],
		id: '12345',
		quality: 50,
		// background: '#00000000' // The sticker background color (only for full stickers)
	}).build();
	return sticker;
}