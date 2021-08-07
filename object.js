class Task {
  
    constructor(id, done, title, dueDate, description) {
        this.id = id;
        this.done = done;
        this.title = title;//[x] - задача выполнена. [ ] - задача открыта
        this.dueDate = dueDate; //вывод даты завершения, если задана
        this.description = description;//вывод описания задачи, если задано.
    }

    toString() {
        const options = {month: 'short', day: 'numeric'};
        let adaptedDate = this.dueDate !== undefined ? `${"(" + this.dueDate.toLocaleDateString('en-US', options) + ")"}` : '';

        let done = this.done ? '[x]' : '[ ]';

        if (this.dueDate === "" || undefined) {
            if (this.description === "" || undefined) {
                return (`${this.id}. ${done} ${this.title}`)
            } else {
                return (`${this.id}. ${done} ${this.title}\n  ${this.description}`)
            }
        } else {
            if (this.description === "" || undefined) {
                return (`${this.id}. ${done} ${this.title} ${adaptedDate}`)
            }
            return (`${this.id}. ${done} ${this.title} ${adaptedDate}\n   ${this.description}`)
        }
    }

    toogle() {
        this.done = !this.done;
    }

    isOverdue() {
        let currentDate = new Date();
        if (currentDate - this.dueDate < 0) {
            return true;
        } else {
            return false; // 'alredy overdued!'
        }
    }
  
    postponeDay(timeSpan) {
        this.dueDate.setDate(this.dueDate.getDate() + timeSpan);
    }
  
    setDescription(description) {
        this.description = description;
    }
}
const exampleDate = new Date(2021, 7, 4);
let exampleTask = new Task(1, false, 'Implement task output', exampleDate,);

console.log(`\n\n\n toString - Пример печати на экран, смотрите ниже. \n`)
console.log(exampleTask.toString());

console.log(`\n\n toggle - переключает статус задачи. Отлично, задача выполнена!\n`);
exampleTask.toogle();
console.log(exampleTask.toString());

console.log(`\n\n\n setDescription - Задает описание задачи, результат можно увидеть ниже.\n`);
exampleTask.setDescription('Use fields: title, desc, done, dueDate');
console.log(exampleTask.toString());

console.log(`\n\n\n isOverdue - возвращает true если задача просрочена. Иначе false.\n`);
console.log(exampleTask.toString());
console.log(exampleTask.isOverdue());

console.log(`\n\n\n postponeDay - откладывает срок выполнения задачи на указное время (B днях).\n`);
exampleTask.postponeDay(21);
console.log(exampleTask.toString());

console.log(`\n\n\n Теперь задача прострочена! Проверим это применив функцию isOverdue()+\n`);
console.log(exampleTask.toString());
console.log(exampleTask.isOverdue());



const testDate = new Date(2021, 7, 4);
module.exports.testTask =  new Task(1, false, 'Implement task output', testDate,);

