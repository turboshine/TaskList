const form = document.getElementById('form');
const taskNameInput = document.getElementById('task-name');

const taskDescription = document.getElementById('task-desc');



const taskAssignedTo = document.getElementById('assigned');

const date = document.getElementById('task-date');
const addTaskbutton = document.getElementById('add-task-button');

const myTaskManager = new TaskManager();
myTaskManager.load();
myTaskManager.render();




function validateFormInput(e) {

    e.preventDefault();


    const taskNameError = document.getElementById('error-t-name');
    const taskDescError = document.getElementById('error-t-desc');
    const assignedToError = document.getElementById('error-t-assignedTo');
    const dateError = document.getElementById('error-t-date');
    const taskName = taskNameInput.value;
    const taskDesc = taskDescription.value;
    const assignedTo = taskAssignedTo.value;
    const taskDate = date.value;
    taskNameError.style.display = 'none';
    taskNameError.style.borderColor = 'black';
    taskDescError.style.display = 'none';
    assignedToError.style.display = 'none';
    dateError.style.display = 'none';

    if (taskName == ('')) {

        taskNameError.style.display = 'block';
        return false;
    }
    if (taskDesc == ('')) {

        taskDescError.style.display = 'block';

        return false;
    }
    if (assignedTo == ('')) {


        assignedToError.style.display = 'block';


        return false;
    }
    if (taskDate === ('') || taskDate === null) {


        dateError.style.display = 'block';
        // return false stops date to display as NaN if a date field is empty
        return false;

    } else {

        true;
        form.reset();

    }
    myTaskManager.addTask(taskName, taskDesc, assignedTo, taskDate);

    myTaskManager.getTaskById();
    myTaskManager.save();

    myTaskManager.render();






}


addTaskbutton.addEventListener('click', validateFormInput);










const taskListCards = document.querySelector('#taskList');
taskListCards.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {
        // console.log('!!!!!!!!!', event.target);
        const parentTask = event.target.parentElement.parentElement.parentElement;
        console.log(parentTask);
        //using dataset property to get the task Id
        const taskId = Number(parentTask.dataset.taskId);
        // console.log(taskId);
        const task = myTaskManager.getTaskById(taskId);
        task.status = 'DONE';

        myTaskManager.save();
        myTaskManager.render();


    }
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);
        const task = myTaskManager.getTaskById(taskId);
        myTaskManager.deleteTask(taskId);
        myTaskManager.save();
        myTaskManager.render();

    }

})
















const config = {

    dateFormat: "m-d-Y"
}


flatpickr("input[type=datetime-local]", config);