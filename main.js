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

let task = new Task();
task.count = 1000;
task.done = true;
task.title = "The test task";
task.dueDate = data1;
task.desc = "Description 1"

task.toString();
task.toggle();
task.isOverdue();
console.log(task.isOverdue());
console.log(task.toString());
//console.log(
//    `${this.count}. ` +  `${this.done}` + `${this.title}` +  `${ "(" + this.dueDate.toLocalDateScring('en-US', options) + ")" }`
//);