module.exports = async (notion, message) => {
    const array = message.toLocaleLowerCase().split(' ');
	const content = {
		database: array[1],
		id: array[2],
		action: array[3],
	}

	if(content.action === 'check' || content.action === 'uncheck') {
		const response = await notion.pages.update({
			page_id: content.id,
			properties: {
				Done: {
					checkbox: content.action === 'check' ? true : false
				}
			}
		})
		
		if(response.url) {
			return 'feito ✔️';
		} else {
			return 'Não consegui enviar sua ação ☹️';
		}
	}
};