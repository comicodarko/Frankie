module.exports = async (notion, id, content) => {
    let database;
    let message;
	let todos = [];
    if(content) {
        const lower = content.toLowerCase();
        const first = lower.charAt(0).toUpperCase();
        const project = first + lower.slice(1);
        message = `*💻 A Ser Feito de ${project} 💻*\n\n`
    
        database = await notion.databases.query({
            database_id: id,
            filter: {
                property: 'Projeto',
                multi_select: {
                    contains: project
                }
            }
        })
    } else {
		message = '*💻 A Ser Feito 💻*\n\n';
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
		message
	};
};