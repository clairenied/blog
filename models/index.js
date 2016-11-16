var Sequelize = require('sequelize')
var blogDb = new Sequelize('postgres://localhost:5432/blogdb')

let postSchema = {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	tags: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
	    // page.tags = 'programming,coding,javascript'
    set: function (value) {
      var arrayOfTags;
      if (typeof value === 'string') {
        arrayOfTags = value.split(',').map(function(string) {
            return string.trim();
        });
        this.setDataValue('tags', arrayOfTags);
      } else {
         this.setDataValue('tags', value);
      }
    }
  }
}

var postConfig = {}
var Post = blogDb.define('post', postSchema, postConfig)


let userSchema = {
	firstName: {
		type: Sequelize.STRING
		// allowNull: false
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
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
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

//These are sort of the same
//User will have extra methods that know about posts
//To have all of the methods, you need both
Post.belongsToMany(User, { through: 'postuser' })
User.belongsToMany(Post, { through: 'postuser' })


module.exports = {
	User: User,
	Post: Post,
	blogDb: blogDb
}
