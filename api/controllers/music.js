const { Controller } = require('bak')

const {Music} = require('../models')

class MusicController extends Controller {
	init() {
		this.get('/music', this.getMusic)
		this.post('/music', this.postMusic)
	}

	async getMusic() {
		const all = await Music.find({})
		return all;
	}

	async postMusic() {
		if (req.payload.action === 'add') {
			const p = new Music({ name: req.payload.name })
			await p.save()
			return p
		}
		else if (req.payload.action === 'remove') {
			const re = await Music.remove({ name: req.payload.name })
			return re;
		}
	}
}

module.exports = MusicController