module.exports = async (notion, id, content) => {
    let database;
    let message;
    if(content) {
        const lower = content.toLowerCase();
        const first = lower.charAt(0).toUpperCase();
        const project = first + lower.slice(1);
        // message = `*🎬 Filmes de ${gender}🎬*\n\n`
    
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


    message = '*ToDo Tintoria*\n\n';
    console.log(`${chalk.bgHex(colors.pink).bold(' ToDo - Tintoria resgatado ')}`);
    
    database.results.forEach(todo => {
        console.log(`${chalk.hex(colors.pink).bold(`- ${todo.properties.Label.title[0].text.content}`)}`);
        message = message + `*- ${todo.properties.Label.title[0].text.content}*\n`;
    })
    return message;
};