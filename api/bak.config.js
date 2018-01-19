module.exports = {
	// Routes
	prefix: '/api',
	routes: [
	  './controllers/music'
	],
  
	// Plugins
	registrations: [
	  '@bakjs/mongo',
	  // '@bakjs/auth'
	],
  
	// Mongo, lkm
	mongo: {
	  connections: {
		default: { uri: 'mongodb://localhost/test' }
	  }
	},
}