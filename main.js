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
        let diffDate = this.dueDate - now;
        return diffDate > 0;
    }

    toString() {
        const options = { month: 'short', day: 'numeric' };
        return `${this.count}. ${this.done ? '[x]' : '[ ]'} ${this.title} ${"(" + this.dueDate.toLocaleDateString('en-US', options) + ")"} \n   ${this.desc}`;
       }
};
let data1 = new Date();
data1.setDate(21);
data1.setMonth(5);
data1.setYear(2021);

let task = new Task(1, true, 'Implement task output', data1, 'Test description');

task.toString();
task.toggle();
task.isOverdue();
console.log(task.isOverdue());
console.log(task.toString());
