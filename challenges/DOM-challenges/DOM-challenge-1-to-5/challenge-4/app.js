/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById('taskInput').value
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const totalTasks = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

addButton.addEventListener('click', ()=>{

    // create task - li
    const li = document.createElement('li')
    li.innerText = taskInput
    li.classList.add('task-item')

    // create delete btn
    const delBtn = document.createElement('button')
    delBtn.innerText = "Delete"
    delBtn.classList.add("delete-button")

    li.appendChild(delBtn)

    completedTasks.appendChild(li)
})