var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
	title:{
		type:String,
		required: true
	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String
	},
	author:{
		type:String
	},
	publisher:{
		type:String
	},
	prID:{
		type:String
	}
});

var Book = module.exports = mongoose.model('Books', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit);
}

// Get Book By ID
module.exports.getBookById = function(id, callback) {
	Book.findById(id, callback);
}

// Get Book By Title
module.exports.getBookByTitle = function(title, callback) {
	Book.findOne({title: title}, callback);
}

// Add Book
module.exports.addBook = function(book, callback) {
	Book.create(book, callback);
}