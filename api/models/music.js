const {Model, Schema} = require('@bakjs/mongo')

class Music extends Model {
	static get $schema() {
		return {
			name: {type: Schema.Types.String},
		}
	}
}