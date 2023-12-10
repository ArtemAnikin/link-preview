import express from 'express';
import bodyParser from 'body-parser';
import {IPreviewData} from "./types";
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const data:IPreviewData = {
    title: 'Some long custom title',
    description: 'Some custom description Some custom description',
    imageUrl: 'https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg',
    customLink: 'url=http://www.custom-link.com'
}

app.get('/', (req: express.Request, res: express.Response): void => {
    res.render('index', data);
});

app.post('/set-link-config', (req: express.Request, res :express.Response): void => {
    const { title, description, imageUrl, customLink }: IPreviewData = req.body || {};
    data.title = title || data.title;
    data.description = description || data.description;
    data.imageUrl = imageUrl || data.imageUrl;
    data.customLink = customLink || data.customLink;

    res.set(req.body)
    res.sendStatus(200);
})

app.listen(process.env.PORT || PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});