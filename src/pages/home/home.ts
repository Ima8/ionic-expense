import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,expenseProvider:ExpenseProvider) {
    let db=expenseProvider.getDB();
    console.log(db);
  }

}
