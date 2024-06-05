import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/:videoId', (req: express.Request, res: express.Response): void => {
	const videoId = req.params['videoId']
	const frameLink = 'https://' + req.get('host') + '/player/' + videoId
	res.render('index', { frameLink })
})

app.get('/player', (req: express.Request, res: express.Response): void => {
	const url = req.query['url']
	console.log('==url', url)

	res.json({
		height: 1280,
		html: `<iframe class="streamable-embed" src="${url}" frameborder="0" scrolling="no" width="720" height="1280" allowfullscreen></iframe>`,
		provider_name: 'Streamable',
		provider_url: 'https://streamable.com',
		thumbnail_url:
			'//cdn-cf-east.streamable.com/image/uc9t1z.jpg?Expires=1717837680&Signature=MV4l2ZMgmc-p3YPRFvNI-~a-x0NdL98wWWlUPEW6Tu4TdzsRSw05nEGOVUlvHQplgu30sc0tdSoshiV0Bl3CLWpjANDczjwu6QCdbhBLvUc9F6TP5WWo1j6qxhR8iLnC-cEJP7qAllEOC8XOZNuMtSsO7UpJBlyDB-kBjlaWuhGjk6VRn09V1njWyP5DRuFNsCiqMvUJtjLuAvb7SrUK63HiVV01fA0PyPyV-ATxU5PvePUy7NjLxOaU~HnW9r5byFKJFtAvtdblwCv-tQREgmCRk~c3rqAYz8RBFVDw1l9QrCyCv8xGaZQSQkYevAyBkeNaU5fTMP~QIaIYdzzOuQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
		thumbnail_width: 720,
		thumbnail_height: 1280,
		title: 'test-video',
		type: 'video',
		version: '1.0',
		width: 720
	})
	// res.render('player', { url })
})

app.listen(process.env.PORT || PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
