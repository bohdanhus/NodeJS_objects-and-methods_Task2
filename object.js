let monthsAre = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


class Task {
  constructor(count, done, title, dueDate, desc) {
    this.count = count;
    this.done = done;
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
  }

  toggle() {
    this.done = !this.done;
  }

  isOverdue(){
    let now = new Date();
    let diffDate = this.dueDate - now
    return diffDate > 0;
  }

  toString() {
    const mark = this.done ? "[x]" : "[ ]";
    if (this.count < 10) {
        return `${this.count}. ${mark} ${this.title} (${this.dueDate}) \n   ${this.desc}`;
    } else if (this.count < 100) {
        return `${this.count}. ${mark} ${this.title} (${this.dueDate}) \n    ${this.desc}`;
    } else if (this.count < 1000) {
        return `${this.count}. ${mark} ${this.title} (${this.dueDate}) \n     ${this.desc}`;
    } else {
        return `${this.count}. ${mark} ${this.title} (${this.dueDate}) \n      ${this.desc}`;
    }
  };
}
let data1 = new Date();
data1.setDate(21);
data1.setMonth(10);
data1.setYear(2021);

module.exports.taskObject = taskObject = new Task(
  1000,
  true,
 "The test task",
  data1,
  "Description 1"
);
// taskObject.count = 1000;
// taskObject.done = true;
// taskObject.title = "The test task";
// taskObject.dueDate = data1;
// taskObject.desc = "Description 1"

taskObject.toString();
taskObject.toggle();
taskObject.isOverdue();
console.log(taskObject.isOverdue());
console.log(taskObject.toString());
//console.log(
//    `${this.count}. ` +  `${this.done}` + `${this.title}` +  `${ "(" + this.dueDate.toLocalDateScring('en-US', options) + ")" }`
//);