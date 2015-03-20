function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

function Course (name, department, numberOfCredits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.numberOfCredits = numberOfCredits;
  this.students = [];
  this.days = days;
  this.timeBlock = timeBlock;
}

Course.prototype.addStudent = function (student) {
  this.students.push(student);
};


Student.prototype.name = function () {
  console.log( this.fname + " " + this.lname );
};

Student.prototype.enroll = function (course) {
  if (this.courses.indexOf(course) === -1) {
    for (var i = 0; i < this.courses.length; i++) {
      var studentCourse = this.courses[i];
      if (!studentCourse.conflictsWith(course)) {
        this.courses.push(course);
        course.addStudent(this);
      }
    }
  }
};

Student.prototype.courseLoad = function () {
  var hash = {};
  for(var i = 0; i < this.courses.length; i++) {
    var course = this.courses[i];
    if (hash[course.department] === undefined) {
      hash[course.department] = course.numberOfCredits;
    } else {
      hash[course.department] += course.numberOfCredits;
    }
  }

  return hash;
};

Course.prototype.conflictsWith = function (course) {
  for (var i = 0; i < this.days.length; i++) {
    if (course.days.indexOf(this.days[i] !== -1)) {
      if (this.timeBlock !== course.timeBlock) {
        return false;
      }
    }
  }
  return true;
}


studenta = new Student("ned", "r");
studentb = new Student("kush", "p");
studentc = new Student("cj", "a");
studentd = new Student("ryan", "g");




course_a = new Course("app_academy", "eng", 4, ["mon", "wed", "fri"], 1)
course_b = new Course("sales_club", "sales", 2, ["tues", "thurs"], 4)
course_c = new Course("marketing", "eng", 1, ["mon", "wed"], 1)



studenta.enroll(course_a);
studenta.enroll(course_b);
studenta.enroll(course_c);

// console.log(course_a.students);
console.log(studenta.courseLoad());




















//
