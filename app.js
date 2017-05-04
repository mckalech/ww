var express = require('express');
var app = express();

app.set('view engine', 'jade')
    .use(express.static('./public'))
    .get('*', function (req, res) {
        res.render('index');
    })

app.listen(process.env.PORT || 3000, function(){
	console.log('Express server');
});
	