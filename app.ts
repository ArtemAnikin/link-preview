import express from 'express';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        title: 'Some long custom title',
        description: 'Some custom description Some custom description',
        imageUrl: 'https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg',
        customLink: 'url=http://www.custom-link.com'
    }
    res.render('index', data);
});

app.listen(process.env.PORT || PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});