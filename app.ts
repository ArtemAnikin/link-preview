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
	res.json({
		height: 1280,
		html: '<iframe class="streamable-embed" src="https://test-video-24-ba35171636fd.herokuapp.com/player-knock" frameborder="0" scrolling="no" width="720" height="1280" allowfullscreen></iframe>',
		provider_name: 'Streamable',
		provider_url: 'https://streamable.com',
		thumbnail_url:
			'https://cdn-cf-east.streamable.com/image/2zsmq8.jpg?Expires=1717847441414&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=hQFA1HLU8Ek1u7JhwqpQHUlpYziPdQ34LIRVNA6G65U4~OMT7FtCJoxtNvsLeb1DBTQEV3eIvTFGV8rma3MawJE-VVQPU~PSCjIV-0IUcKmxqupcIegosELx9N6YJWTvSWdqUVP8A5cape0PIlQAbgsSDuPk-w~hUCQWPQSbV1peB~iEoU~okVAXCpLI-qmLHIjHffyz364lO1iBqiIuy6G6dDcAW5Y7ExV9PgynlUG8JKqLQelqCX0QG0lO6bEPa66xkOphFrpu9xZUBdCrnEBTBtNTmbWAYXm~zWCPhwwzkTcMuRcYWM3qjbnlv7enNlvFdtyI7~xflM05eiuThw__',
		thumbnail_width: 720,
		thumbnail_height: 1280,
		title: 'Узнал страшную правду 30ти летнего мотора Форда😱',
		type: 'video',
		version: '1.0',
		width: 720
	})
})

app.get('/player', (req: express.Request, res: express.Response): void => {
	res.render('player')
})

app.get('/player-2', (req: express.Request, res: express.Response): void => {
	res.render('player-2')
})

app.get('/player-3', (req: express.Request, res: express.Response): void => {
	res.render('player-3')
})

app.get(
	'/player-knock',
	(req: express.Request, res: express.Response): void => {
		res.render('playerKnock')
	}
)

app.listen(process.env.PORT || PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
