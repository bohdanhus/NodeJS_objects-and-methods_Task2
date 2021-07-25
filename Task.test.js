const task = require('./objectAndMethod');


describe("object", () => {
    it("toggle test", () => {
        task.toggle();
        expect(task.done).toBe(false);
    });
    it("isoverdue test"), () => {
        task.isOverdue();
        expect(task.dueDate).toBe(true);
    }
});