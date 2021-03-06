const _ = require('lodash');

let data = [];

function add (name, content) {
	if (data.length > 0){
		var id = data.reduce(function(memo, obj){
		if (memo <= obj.id) {
			return memo = obj.id;	
		}
	},0) + 1
	
	} else {
		id = 0;
	}
  		data.push({ id: id, name: name, content: content });	
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

	add('Joe Blow', "hello there");
	add('Joe Blow', "good bye");
	add('Crispy creme', 'Heart attack ')
	// console.log('list  = ', list());

	// console.log('looking for crispy - ', find({name: "Crispy creme"}));

