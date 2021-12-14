module.exports = async (notion, id, content) => {
    let database;
    let message;
	let todos = [];
	let contentLabel;
    if(content) {
        const lower = content.toLowerCase();
        const first = lower.charAt(0).toUpperCase();
        const tag = first + lower.slice(1);
        message = `*💻 A Ser Feito de ${tag} 💻*\n\n`;
		contentLabel = `💻 A Ser Feito de ${tag} 💻`;

        database = await notion.databases.query({
            database_id: id,
            filter: {
                property: 'Tags',
                multi_select: {
                    contains: tag
                }
            }
        })
    } else {
		message = '*💻 Tudo a Ser Feito 💻*\n\n';
		contentLabel = '💻 Tudo a Ser Feito 💻';
        database = await notion.databases.query({
            database_id: id,
            filter: {
                property: 'Done',
                checkbox: {
                    equals: false
                }
            }
        })
    }
    
    database.results.forEach(todo => {
        message = message + `*- ${todo.properties.Todo.title[0].text.content}*\n`;
		todos.push({
			id: todo.id,
			label: todo.properties.Todo.title[0].text.content
		}) 
	})
    return {
		content: todos,
		contentLabel,
		database: 'todo',
		actions: [
			// 'delete',
			'check'],
		message
	};
};