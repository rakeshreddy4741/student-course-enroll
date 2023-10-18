

'use strict';

document.getElementById("selected-course").addEventListener('click',()=>{
    getEnrolled();
})


function formValidation(field,functionName){

    const fieldValidation = document.getElementById(field).value;

    if (field === 'student-name'){
        if (fieldValidation.length < 3) {
            $('#student-name-success').hide();
            $('#student-name-error').text('Please fill the Required Field').show();

        } else {
            functionName();
        }
    }
    else if (field === 'course-title'){
        if (fieldValidation.length < 3) {
            $('#course-title-success').hide();
            $('#course-title-error').text('Please fill the Required Field').show();

        } else {
            functionName();
        }
    }

}

function createStudent(){
    const name = document.getElementById('student-name').value;
    $.ajax({ url: '/api/createstudent', type: 'POST', data: { name: name } })
        .then(res => {
            if (res.message === 0){
                $('#student-name-error').hide();
                $('#student-name-success').show();
                getStudents();
            }
            else{
                $('#student-name-success').hide();
                $('#student-name-error').text(res.message).show();
            }
        })
}
getStudents();
function getStudents(){
    $.ajax({ url: '/api/getallstudent', type: 'POST' })
        .then(res => {
            let student = res.opt;
            $('#student-list').empty();
            $('#students-dropdown').empty().append(`<option value="0">Select Student</option>`);
            student.forEach(element => {
                $('#student-list').append(`<li>${element.name} <button onclick="getOneStudent(${element.id})">Edit</button> <button onclick="deleteStudent(${element.id});">Delete</button></li>`);
            });
            student.forEach(element => {
                $('#students-dropdown').append(`<option value="${element.id}">${element.name}</option>`);
            });
        })
}

function getOneStudent(id){
    $.ajax({ url: '/api/getonestudent', type: 'POST', data: { id: id } })
        .then(res => {
            let student = res.opt;
            $('#createStudentBtn').hide();
            $('#updateStudentBtn').show();
            $('#student-name').val(student[0].name);
            $('#student-id').val(student[0].id);

        }
    )
}

function updateStudent(){
    const name = document.getElementById('student-name').value;
    const id = document.getElementById('student-id').value;
    $.ajax({ url: '/api/updatestudent', type: 'POST', data: { name: name, id: id } })
        .then(res => {
            if (res.message === 0){
                $('#student-name-error').hide();
                $('#student-name-success').show().text('Student Updated');
                $('#student-name').val('');
                $('#createStudentBtn').show();
                $('#updateStudentBtn').hide();
                getStudents();
            }
            else{
                $('#student-name-success').hide();
                $('#student-name-error').text(res.message).show();
            }
        })
}

function deleteStudent(id){
    $.ajax({ url: '/api/deletestudent', type: 'POST', data: { id: id } })
        .then(res => {
            if (res.message === 0){
                $('#student-list-alerts').show().text('Student Deleted');
                getStudents();
            }
            else{
                $('#student-list-alertsr').text(res.message).show();
            }
        })
}

function createCourse(){
    const name = document.getElementById('course-title').value;
    $.ajax({ url: '/api/createcourse', type: 'POST', data: { title: name } })
        .then(res => {
            if (res.message === 0){
                $('#course-title-error').hide();
                $('#course-title-success').show();
                getCourses();
            }
            else{
                $('#course-title-success').hide();
                $('#course-title-error').text(res.message).show();
            }
        })
}

getCourses();
function getCourses(){
    $.ajax({ url: '/api/getallcourse', type: 'POST' })
        .then(res => {
            let course = res.opt;
            $('#course-list').empty();
            $('#courses-dropdown').empty();
            $('#selected-course').empty();
            $('#courses-dropdown').append(`<option value="0">Select Course</option>`);
            $('#selected-course').append(`<option value="0">Select Course</option>`);
            course.forEach(element => {
                $('#course-list').append(`<li>${element.title} <button onclick="getOneCourse(${element.id})">Edit</button> <button onclick="deleteCourse(${element.id});">Delete</button></li>`);
            });
            course.forEach(element => {
                $('#courses-dropdown').append(`<option value="${element.id}">${element.title}</option>`);
            });
            course.forEach(element => {
                $('#selected-course').append(`<option value="${element.id}">${element.title}</option>`);
            });
        })
}

function getOneCourse(id){
    $.ajax({ url: '/api/getonecourse', type: 'POST', data: { id: id } })
        .then(res => {
            let course = res.opt;
            $('#createCourseBtn').hide();
            $('#updateCourseBtn').show();
            $('#course-title').val(course[0].title);
            $('#course-id').val(course[0].id);

        }
    )
}

function updateCourse(){
    const title = document.getElementById('course-title').value;
    const id = document.getElementById('course-id').value;
    $.ajax({ url: '/api/updatecourse', type: 'POST', data: { title: title, id: id } })
        .then(res => {
            if (res.message === 0){
                $('#course-title-error').hide();
                $('#course-title-success').show().text('Course Updated');
                $('#course-title').val('');
                $('#createCourseBtn').show();
                $('#updateCourseBtn').hide();
                getCourses();
            }
            else{
                $('#course-title-success').hide();
                $('#course-title-error').text(res.message).show();
            }
        })
}

function deleteCourse(id){
    $.ajax({ url: '/api/deletecourse', type: 'POST', data: { id: id } })
        .then(res => {
            if (res.message === 0){
                $('#course-name-error').hide();
                $('#course-list-alerts').show().text('Course Deleted');
                getCourses();
            }
            else{
                $('#course-name-success').hide();
                $('#course-name-error').text(res.message).show();
            }
        })
}

function Enroll(){
    const studentid = document.getElementById('students-dropdown').value;
    const courseid = document.getElementById('courses-dropdown').value;
    $.ajax({ url: '/api/enroll', type: 'POST', data: { studentid: studentid, courseid: courseid } })
        .then(res => {
            if (res.message === 0){
                $('#enrollment-error').hide();
                $('#enrollment-success').show().text('Student Enrolled');
            }
            else{
                $('#enrollment-success').hide();
                $('#enrollment-error').text(res.message).show();
            }
        })
}

function getEnrolled(){
    const courseid = document.getElementById('selected-course').value;
    $.ajax({ url: '/api/getallenrolled', type: 'POST', data: { courseid: courseid } })
        .then(res => {
            let enrolled = res.opt;
            $('#student-list-in-course').empty();

            if (res.message){
                $('#student-list-in-course').append(`<li>${res.message}</li>`);
                return;
            }


            enrolled.forEach(element => {
                $('#student-list-in-course').append(`<li>${element.student}</li>`);
            });

        })
}