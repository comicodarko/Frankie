module.exports = async (notion, id) => {
	database = await notion.databases.retrieve({ database_id: id });
	return database.properties.Tags.multi_select.options;
}