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

    editTodo(name: String, notes: String, completed: boolean) {


        if (name == undefined) {
            name = "name";
        }
        if (notes == undefined) {
            notes = "notes";
        }

        if (completed == undefined) {
            completed = false;
        }
        //console.log("Name: " + name + " Notes: " + notes + " Completed: " + completed);

        this.todos.remove(this.todo);
        this.todos.push({ name, notes, completed });
        this.navCtrl.pop();
    }

    cancel() {
        this.navCtrl.pop();
    }
    deleteTodo(todoID){
   this.todos.remove(todoID);
   this.navCtrl.pop();
  }
}