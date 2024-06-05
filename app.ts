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

app.get('/video-preview', (req, res) => {
	// const videoUrl = req.query.url;

	const videoUrl =
		'https://storage.googleapis.com/knock-extension/test-video.mp4'

	// Assuming videoUrl is validated and sanitized
	res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Video Preview</title>
            <meta property="og:title" content="Video Preview">
            <meta property="og:description" content="Check out this video preview!">
            <meta property="og:image" content="https://example.com/video-thumbnail.jpg">
            <meta property="og:video" content="${videoUrl}">
            <meta property="og:video:secure_url" content="${videoUrl}">
            <meta property="og:video:type" content="video/mp4">
            <meta property="og:video:width" content="560">
            <meta property="og:video:height" content="315">
        </head>
        <body>
            <h1>Video Preview</h1>
            <video controls width="560" height="315">
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </body>
        </html>
    `)
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

//
// app.get('/player', (req: express.Request, res: express.Response): void => {
// 	res.json({
// 		height: 1280,
// 		html: `<iframe class="streamable-embed" src="https://test-video-5-1a82a89fe696.herokuapp.com/player" frameborder="0" scrolling="no" width="720" height="1280" allowfullscreen></iframe>`,
// 		provider_name: 'Streamable',
// 		provider_url: 'https://streamable.com',
// 		thumbnail_url:
// 			'//cdn-cf-east.streamable.com/image/uc9t1z.jpg?Expires=1717837680&Signature=MV4l2ZMgmc-p3YPRFvNI-~a-x0NdL98wWWlUPEW6Tu4TdzsRSw05nEGOVUlvHQplgu30sc0tdSoshiV0Bl3CLWpjANDczjwu6QCdbhBLvUc9F6TP5WWo1j6qxhR8iLnC-cEJP7qAllEOC8XOZNuMtSsO7UpJBlyDB-kBjlaWuhGjk6VRn09V1njWyP5DRuFNsCiqMvUJtjLuAvb7SrUK63HiVV01fA0PyPyV-ATxU5PvePUy7NjLxOaU~HnW9r5byFKJFtAvtdblwCv-tQREgmCRk~c3rqAYz8RBFVDw1l9QrCyCv8xGaZQSQkYevAyBkeNaU5fTMP~QIaIYdzzOuQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
// 		thumbnail_width: 720,
// 		thumbnail_height: 1280,
// 		title: 'test-video',
// 		type: 'video',
// 		version: '1.0',
// 		width: 720
// 	})
// })

app.listen(process.env.PORT || PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
