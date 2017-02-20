import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

// get a reference to the details page
import { DetailsPage } from '../details/details';

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
 addTodo() {
    this.navCtrl.push(DetailsPage);
  }



  editTodo(){
    this.navCtrl.push(DetailsPage);
  }

  deleteTodo(todoID){
   this.todos.remove(todoID);
  }
}