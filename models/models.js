var Sequelize = require('sequelize')

var blogDb = new Sequelize('postgress://localhost:5432/twitterdb')

let postSchema = {
	title: { 
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	}
}

var postConfig = {}
var Post = blogDb.define('post', postSchema, postConfig)


let userSchema = {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING
	},
	pictureUrl: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	},
	// To-do: have usernames that are not just email addresses/first names
	// username: {
	// 	type: Sequelize.STRING,
	// 	allowNull: false
	// },
	email: {
		type: Sequelize.STRING,
		unique: true,
		validate: {
			isEmail: true
		}
	}
}

var userConfig = {
	// instanceMethods: {
	// 	ban: function(){}
	// },
	// classMethods: {
	// 	detectSpamAccounts: function(){}
	// }
}
var User = blogDb.define('user', userSchema, userConfig)


let tagSchema = {
	tag: {
		type: Sequelize.STRING,
		allowNull: false
	}
}

var tagConfig = {}
var Tag = blogDb.define('tag', tagSchema, tagConfig)

//These are sort of the same
//User will have extra methods that know about posts
//To have all of the methods, you need both
User.hasMany(Post)
Post.belongsTo(User)


module.exports = {
	User: User,
	Tweet: Tweet,
	blogDb: blogDb
}


//Many to many
//With a tag example
// Post.belongsToMany(Tag, { through: 'postTag' })
// Tag.belongsToMany(Post, { through: 'postTag' })

