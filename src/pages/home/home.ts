/**
 * File Name:home.ts
 * Author: Robert Page
 * Student Number: 200281838
 * App Description: Main page typescipt
 */

// Imports
import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

// get a reference to the details page
import { DetailsPage } from '../details/details';
import { EditDetailsPage } from '../details/editDetails';

// Components
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // PROPERTIES
  todos: FirebaseListObservable<any>;

  // CONSTRUCTOR
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    af: AngularFire) {
    this.todos = af.database.list('/todos');
  }
  // METHODS

  // addTodo method
  addTodo() {
    this.navCtrl.push(DetailsPage);
  }

  // editTodo method
  editTodo(todo) {
    //send todo to edit page
    this.navCtrl.push(EditDetailsPage, todo);
  }

  // deleteTodo
  deleteTodo(todoID) {
    this.todos.remove(todoID);
  }
}