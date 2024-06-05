import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req: express.Request, res: express.Response): void => {
	res.render('index')
})

app.get('/oembed', (req, res) => {
	// const videoUrl = req.query.url
	const videoUrl =
		'https://storage.googleapis.com/knock-extension/test-video.mp4'

	// Generate oEmbed data for the video
	const oembedData = {
		type: 'video',
		version: '1.0',
		title: 'Your Video Title',
		author_name: 'Your Name',
		provider_name: 'Your Provider Name',
		provider_url: 'https://storage.googleapis.com',
		thumbnail_url:
			'https://storage.googleapis.com/knock-extension/assets/knock-logo.svg',
		html: `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`
	}

	res.json(oembedData)
})

app.listen(process.env.PORT || PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
