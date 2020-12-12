const express = require('express');
const axios = require('axios');

const app = express();

const apiUrl =
	'https://wapi.voot.com/ws/ott/getMediaInfo.json?platform=Web&pId=2&mediaId=';

const streamUrl =
	'https://cdnapisec.kaltura.com/p/1982551/playManifest/pt/https/f/applehttp/t/web/e/';

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Server is Online',
	});
});

app.get('/info', async (req, res) => {
	const url = req.query.url;
	const mediaId = url.split('/')[5];

	try {
		const result = await axios.get(apiUrl + mediaId);

		res.status(200).json({
			result: {
				mediaId: result.data.assets.MediaID,
				name: result.data.assets.MediaName,
				entryId: result.data.assets.EntryId,
				description: result.data.assets.Metas[1].Value,
				downloadUrl: streamUrl + result.data.assets.EntryId,
			},
		});
	} catch (error) {
		res.status(200).json(error.message);
	}
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Server is Running on Port 5000');
});
