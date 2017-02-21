/**
 * File Name:details.ts
 * Author: Robert Page
 * Student Number: 200281838
 * App Description: Details Typescript
 */

// Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// Components
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  // PROPERTIES
  todos: FirebaseListObservable<any>;

  // Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.todos = af.database.list('/todos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  // Methods

  // addTodo method
  addTodo(name: String, notes: String, completed: boolean) {

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

    // add todo
    this.todos.push({ name, notes, completed });
    this.navCtrl.pop();
  }

  // ignore changes and go back
  cancel() {
    this.navCtrl.pop();
  }
}