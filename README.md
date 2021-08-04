# NodeJS_objects-and-methods_Task2
Objects and mini-game
Реализуйте функцию для печати в консоль объекта типа Task в следующем виде:

1. [x] Implement task output (Aug 25)
   Use fields: title, desc, done, dueDate

 1. - идентификатор задачи
 [x] - задача выполнена. [ ] - задача открыта
 Implement task output - название задачи
 (Aug 25) - вывод даты завершения, если задана
 Use fields: title, desc, done, dueDate - вывод описания задачи, если задано.
 
 Task object with methods#
Реализовать методы для работы с задачей:


 toString - печать на экран. Адаптировать код функции печати
 toggle - переключает статус задачи (свойство done) на обратный
 isOverdue - возвращает true если задача просрочена. Иначе false.
 postpone(timeSpan) - откладывает срок выполнения задачи на указное время (в часах или днях)
