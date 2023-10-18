const db = require("../models");
const {where} = require("sequelize");
const Student = db.student;



exports.readAll = async (req, res) => {
    try {
        const students = await Student.findAll({
            order: [['updatedAt', 'DESC']]
        });

        if (students.length === 0) {
            return res.status(404).json({ message: "No Students found." });
        }

        const opt = students.map(student => ({
            id: student.id,
            name: student.name,
        }));

        console.log(opt);
        res.status(200).json({ opt });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        // Check if a student with the same properties already exists
        const existingStudent = await Student.findOne({
            where: {
                name: req.body.name
            }
        });

        if (existingStudent) {
            return res.status(200).json({ message: "Student already exists." });
        }

        // Create the new student
        const newStudent = await Student.create({
            name: req.body.name
        });

        if (!newStudent) {
            return res.status(404).json({ message: "Student Not Created." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getOneStudent = async (req, res) => {
    try {
        const student = await Student.findOne({
            where: {
                id: req.body.id
            }
        });

        if (!student) {
            return res.status(404).json({ message: "Student Not found." });
        }

        const opt = [
            {
                id: student.id,
                name: student.name
            }
        ];

        res.status(200).json({ opt });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateStudent = async (req, res) => {
    try {
        const existingStudent = await Student.findOne({
            where: {
                name: req.body.name
            }
        });

        if (existingStudent) {
            return res.status(200).json({ message: "Student already exists." });
        }

        const [student] = await Student.update(
            {
                name: req.body.name
            },
            {
                where: {
                    id: req.body.id
                }
            }
        );

        if (student === 0) {
            return res.status(404).json({ message: "Student Not found." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.destroy({
            where: {
                id: req.body.id
            }
        });

        if (!student) {
            return res.status(404).json({ message: "Student Not found." });
        }

        res.status(200).json({ message: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}