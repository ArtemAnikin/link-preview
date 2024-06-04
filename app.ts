import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/:videoId', (req: express.Request, res: express.Response): void => {
	const videoId = req.params['videoId']
	res.render('index', { videoId })
})

app.get(
	'/player/:videoId',
	(req: express.Request, res: express.Response): void => {
		const videoId = req.params['videoId']
		res.render('player', { videoId })
	}
)

app.listen(process.env.PORT || PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
