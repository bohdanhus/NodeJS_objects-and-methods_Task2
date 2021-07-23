const taskObject = require("./objectAndMethod");


describe("object", () => {
    it("toggle test", () => {
		taskObject.toggle();
		expect(taskObject.done).toBe(false);
	});
    it("isoverdue test"), () => {
        taskObject.isOverdue();
        expect(taskObject.dueDate).toBe(true);
    }
});