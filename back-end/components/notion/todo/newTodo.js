require('dotenv').config();

module.exports = async (todo) => {
    const response = await global.notion.pages.create({
        parent: {
            database_id: process.env.NOTION_TODO
        },
        properties: {
            Todo: { title: [{text: {content: todo}}] },
            Done: {checkbox: false}
        }
    })
    if(response.url) {
		return `"${todo}" foi enviado ✔️`
    } else {
		return `Não consegui salvar "${todo}" 😔`
    }
};