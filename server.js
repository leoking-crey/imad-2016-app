var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    
 'article-one': {
    title: 'y should u cry4crey',
    heading: 'sermons of leo',
    date: 'aug 5, 1998',
    content:` <p>
                this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
            </p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>`
},
 'article-two' : {
    title: 'y should u cry4crey',
    heading: 'sermons of leo',
    date: 'aug 5, 1998',
    content:` <p>
                this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
            </p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>`},
 'article-three' :{
    title: 'y should u cry4crey',
    heading: 'sermons of leo',
    date: 'aug 5, 1998',
    content:` <p>
                this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
            </p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>
            <p>this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.</p>`}
};
function CreateTemplate (data){
   var title = data.title;
   var date = data.date;
   var heading = data.heading;
   var content = data.content;
   
   var htmltemplate = `<html>
    <head>
        <title>
         ${title}
        </title>
        <meta name="viewport" , content="width-device-width , initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Homies</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
</html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(CreateTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
