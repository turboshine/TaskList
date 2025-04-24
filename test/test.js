const { assert } = require('chai');
const { describe, it } = require('mocha');
const { TaskManager } = require('../assets/js/taskManager');
const taskManager = require('../assets/js/taskManager').TaskManager;

describe('addTask', () => {
    {
        it('adds a task to the task array', () => {
            //Setup
            const myTaskManager = new TaskManager();
            //Exercise
            myTaskManager.addTask('make a card', 'use bootstrap for cards', 'Johan', '03/24/2022', 'TODO');
            //verify
            assert.ok(myTaskManager.tasks.length == 1);
        })
    }
})
describe('deleteTask', () => {
    it('deletes a task from the task array', () => {
        //Setup
        const myTaskManager = new TaskManager();
        // Exercise
        myTaskManager.addTask('make a card', 'use bootstrap for cards', 'Johan', '03/24/2022', 'TODO');
        myTaskManager.deleteTask(0)
            //Verify
        assert.ok(myTaskManager.tasks.length === 0);

    })
})
describe('getTaskById', () => {
    it('gets a task by its id', () => {
        //Setup
        const myTaskManager = new TaskManager();
        //Exercise
        myTaskManager.addTask('make a card', 'use bootstrap for cards', 'Johan', '03/24/2022', 'TODO');
        const expectedResult = { name: 'make a card', description: 'use bootstrap for cards', assignedTo: 'Johan', dueDate: '03/24/2022', status: 'TODO', id: 0 };
        const result = myTaskManager.getTaskById(0);
        //Verify
        assert.deepEqual(expectedResult, result);


    })
})