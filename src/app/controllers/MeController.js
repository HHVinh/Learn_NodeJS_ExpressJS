const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // Sử dụng Promise.all để chờ cả 2 Promise thực hiện xong
        Promise.all([Course.find({}).sort('-createdAt'), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted: true})
            .then(courses => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController;