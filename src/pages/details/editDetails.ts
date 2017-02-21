/**
 * File Name: editDetails.ts
 * Author: Robert Page
 * Student Number: 200281838
 * App Description: Edit page Typescript
 */

// Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'page-editDetails',
    templateUrl: 'editDetails.html'
})
export class EditDetailsPage {
    // PROPERTIES
    todos: FirebaseListObservable<any>;
    todo: any;
    todoName;
    todoNotes;
    todoCompleted;

    // Constructor
    constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
        this.todos = af.database.list('/todos');
        this.todo = this.navParams.data;
        this.todoName = this.todo.name;
        this.todoNotes = this.todo.notes;
        this.todoCompleted = this.todo.completed;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditDetailsPage');
    }

    // Methods

    // editTodo method
    editTodo(name: String, notes: String, completed: boolean) {

        // just in case nothing is passed in auto add data
        if (name == undefined) {
            name = "name";
        }
        if (notes == undefined) {
            notes = "notes";
        }

        if (completed == undefined) {
            completed = false;
        }

        // update todo
        this.todos.remove(this.todo);
        this.todos.push({ name, notes, completed });
        this.navCtrl.pop();
    }

    // ignore changes and go back
    cancel() {
        this.navCtrl.pop();
    }

    // delete the current todo
    deleteTodo(todoID) {
        this.todos.remove(todoID);
        this.navCtrl.pop();
    }
}