import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {task: "Wash Dishes", completed: false},
      {task: "Throw Out Trash", completed: true},
      {task: "Groceries", completed: true}, 
      {task: "Vitamins", completed: false}
    ]
  }

  ngOnInit(): void {
  }
}

//Han created the HTML but needs to make the TS so it's functional

//1) submit a form to call a function to add new task
//function addTask{ }
//need to add new todo to the Todo[] with "completed" as false (todos.completed === false)

//2) clicking X on item calls function to remove task
//function removeTask{}
// will remove item from Todo[] (maybe todos.task.splice)

//3) clicking complete will set item as complete
//function completeTask{}
// sets todo.completed to true

//4) Text input at the top will filter as you type

//Extra credit -- Give user ability to edit text of tasks
