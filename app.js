var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre')
Book = require('./models/book')

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use /api/books or /api/genre.');
});

app.get('/test', function(req, res) {
	res.send('test');
});

app.get('/api/genres', function(req, res) {
	Genre.getGenres(function(err, genres) {
		if (err) {
			throw err;
		}
		res.json(genres)
	})
});

app.get('/api/books', function(req, res) {
	Book.getBooks(function(err, books) {
		if (err) {
			throw err;
		}
		res.json(books)
	})
});

app.get('/api/books/:_id', function(req, res) {
	Book.getBookById(req.params._id, function(err, book) {
		if (err) {
			throw err;
		}
		res.json(book)
	})
})

app.get('/api/books/:title', function(req, res) {
	Book.getBookByTitle(req.params.title, function(err, book) {
		if (err) {
			throw err;
		}
		res.json(book)
	})
})

// POST genre to the mongo db
app.post('/api/genres', function(req, res) {
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre) {
		if (err) {
			throw err;
		}
		res.json(genre);
	})
});

//  POST books to the mongo db
app.post('/api/books', function(req, res) {
	var book = req.body;
	Book.addBook(book, function(err, books) {
		if (err) {
			throw err;
		}
		res.json(books)
	})
});

// PUT Request
app.put('/api/genres', function(req, res) {
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre) {
		if (err) {
			throw errl
		}
		res.json(genre);
	});
});



app.listen(4000);

console.log('Running on port 4000');