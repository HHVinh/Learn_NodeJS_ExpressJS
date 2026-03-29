const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    videoId: {type: String, required: true},
    level: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    // createdAt: {type: Date, default: Date.now},
    // updatedAt: {type: Date, default: Date.now},
}, {
    // Tự động tạo createdAt và updatedAt thay cho 2 dòng trên
    timestamps: true 
});

// Sử dụng plugin slug
mongoose.plugin(slug);

// Add plugin soft delete
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
