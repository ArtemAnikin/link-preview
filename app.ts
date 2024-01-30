import express from 'express';
import bodyParser from 'body-parser';
import {IPreviewData} from "./types";
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const data:IPreviewData = {
    title: 'Knock test',
    description: 'Knock desc',
    imageUrl: 'https://api.knock-ai.com/resources/assets/v1/195ff9f2-9f3b-492b-adaf-a11221768483/00aed261-8549-4b4a-b520-529455a42ae9.png',
    customLink: 'https://api.knock-ai.com/slack/knock/uBrWde'
}

app.get('/', (req: express.Request, res: express.Response): void => {
    res.render('index', data);
});

app.post('/set-link-config', (req: express.Request, res :express.Response): void => {
    console.log('req', req)
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