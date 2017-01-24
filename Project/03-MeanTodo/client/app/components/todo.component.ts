import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Todo} from "../model/todo";

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {

    todos: Todo[];

    constructor(private _todoService: TodoService) {

    }

    ngOnInit() {
        this.todos = [];
        this._todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }

	addTodo(event, todoText) {
		console.log(todoText.value);
		var newTodo = {
			text: todoText.value,
			isCompleted: false
		};

		var result = this._todoService.saveTodo(newTodo);
		result.subscribe(x => {
			this.todos.push(newTodo);
			todoText.value = '';
		});

	}

    /*setEditState(todo: any, state: any) {
        if (state) {
            todo.isEditMode = state;
        }
        else {
            delete todo.isEditMode;
        }
    }

    updateStatus(todo: any) {
		console.log(todo._id);
        var todoUpdate = {
            id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };

        this._todoService.updateTodo(todoUpdate)
            .subscribe(data => {
                todo.isCompleted = !todo.isCompleted
            });
    }*/
}
