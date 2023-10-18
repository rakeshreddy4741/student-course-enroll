const db = require("../models");
const {where} = require("sequelize");
const Course = db.course;


exports.readAll = async (req, res) => {
    try {
        const courses = await Course.findAll({
            order: [['updatedAt', 'DESC']]
        });

        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found." });
        }

        const opt = courses.map(course => ({
            id: course.id,
            title: course.title,
        }));

        console.log(opt);
        res.status(200).json({ opt });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        // Check if a course with the same properties already exists
        const existingCourse = await Course.findOne({
            where: {
                title: req.body.title
            }
        });

        if (existingCourse) {
            return res.status(200).json({ message: "Course already exists." });
        }

        // Create the new course
        const newCourse = await Course.create({
            title: req.body.title
        });

        if (!newCourse) {
            return res.status(404).json({ message: "Course Not Created." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getOneCourse = async (req, res) => {
    try {
        const course = await Course.findOne({
            where: {
                id: req.body.id
            }
        });

        if (!course) {
            return res.status(404).json({ message: "Course Not found." });
        }

        const opt = [
            {
                id: course.id,
                title: course.title
            }
        ];

        res.status(200).json({ opt });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateCourse = async (req, res) => {
    try {
        const existingCourse = await Course.findOne({
            where: {
                title: req.body.title
            }
        });

        if (existingCourse) {
            return res.status(200).json({ message: "Course already exists." });
        }

        const [course] = await Course.update(
            {
                title: req.body.title
            },
            {
                where: {
                    id: req.body.id
                }
            }
        );

        if (course === 0) {
            return res.status(404).json({ message: "Course Not found." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.destroy({
            where: {
                id: req.body.id
            }
        });

        if (!course) {
            return res.status(404).json({ message: "Course Not found." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}