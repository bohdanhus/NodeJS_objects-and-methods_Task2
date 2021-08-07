const testTask = require("./object").testTask

describe('object methods testing', () => {
    it('has return toggle with false', () => {
        testTask.toogle()
        expect(testTask.done).toBe(true);
    });
    it('has return postponeDay with 4', () => {
        testTask.postponeDay(4)
        expect(testTask.dueDate).toStrictEqual(new Date(2021, 7, 8));
    });
    it('isoverdue test', () => {
        expect(testTask.isOverdue()).toBe(true);
    });
    it('setdescription test', () => {
        testTask.setDescription('Desc: test');
        expect(testTask.description).toBe('Desc: test');
    });
    it('has return tostring without description', () => {
        expect(testTask.toString()).toBe("1. [ ] Implement task output (Aug 4)");
    })
});
