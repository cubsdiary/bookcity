module.exports = async (ctx) => {
	ctx.state.data = {
		msg: 'hello webapps',
		data: {
			name: 'yangjing',
			tel: '1222'
		}
	}
}