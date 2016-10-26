var express = require('express'); 
var morgan = require('morgan'); 
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
 'articleOne' : {
  title: 'Article One| Freaky Coder',
  heading: 'Article One',
  date: '26 Oct 2016',
  content:` <p>
                                This is the content of first article. This is the content of first article
                                </p>
                                <p>
                                This is the content of first article. This is the content of first article
                                </p>
                                <p>
                                 This is the content of first article. This is the content of first article
                                </p>`
},
 'artcleTwo': {
 
  title: 'Articl Two| Freaky Coder',
  heading: 'Article Two',
  date: '26 Oct 2016',
  content:` <p>
                            This is the content of second article.This is the content of second article.This is the content of second article.
                            </p>
                            <p>
                            This is the content of second article.This is the content of second article.This is the content of second article.
                            </p>
                            <p>
                            This is the content of second article.This is the content of second article.This is the content of second article.
                            </p> `
    },
 'articleThree' : {title: 'Article Three| Freaky Coder',
  heading: 'Article Three',
  date: '26 Oct 2016',
  content: `<p>
                            This is the content of third article. This is the content of third article
                            </p>
                            <p>
                            This is the content of third article. This is the content of third article
                            </p>
                            <p>
                             This is the content of third article. This is the content of third article
                            </p>`}
 
};

function createTemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;   
   
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
                <body>
                    <div class="container">
                    <div>
                        <a href="/">Home</a>
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

return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    // article name== article-one
    //articles[articleName]=={} content objecr for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/article-four',function(req,res){
  res.send('Article four Url is requested and will be servbed here.');  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
