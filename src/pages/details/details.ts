import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  // PROPERTIES
  todos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.todos = af.database.list('/todos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addTodo(name: String, notes: String, completed: boolean) {

    if (name == undefined) {
      name = "name";
    }
    if (notes == undefined) {
      notes = "notes";
    }

    if (completed == undefined) {
      completed = false;
    }

    console.log("Name: " + name + " Notes: " + notes + " Completed: " + completed);
    this.todos.push({ name, notes, completed });
    this.navCtrl.pop();
  }
}