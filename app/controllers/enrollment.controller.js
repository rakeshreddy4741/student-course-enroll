const db = require("../models");
const {where} = require("sequelize");
const Enrollment = db.enrollment;
const Student = db.student;
const Course = db.course;

exports.readAllEnrolled = async (req, res) => {
    Enrollment.belongsTo(Student, { foreignKey: 'studentId' });
    try {
        const enrolled = await Enrollment.findAll({
            where: {
                courseId: req.body.courseid
            },
            include: [
                {
                    model: Student,
                    attributes: ['id', 'name']
                }
            ],
            order: [['updatedAt', 'DESC']]
        });

        if (enrolled.length === 0) {
            return res.status(200).json({ message: "No One Enrolled for this Course." });
        }

        const opt = enrolled.map(enrolled => ({
            id: enrolled.student.id,
            student: enrolled.student.name,
        }));

        console.log(opt);
        res.status(200).json({ opt });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.enroll = async (req, res) => {
    try {
        // Check if a course with the same properties already exists
        const existingEnroll = await Enrollment.findOne({
            where: {
                studentId: req.body.studentid,
                courseId: req.body.courseid
            }
        });

        if (existingEnroll) {
            return res.status(200).json({ message: "Course already Enrolled." });
        }

        // Create the new course
        const newCourse = await Enrollment.create({
            studentId: req.body.studentid,
            courseId: req.body.courseid
        });

        if (!newCourse) {
            return res.status(404).json({ message: "Course Not Enrolled." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


