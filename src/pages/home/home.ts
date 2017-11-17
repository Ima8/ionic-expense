import { AdditemPage } from './../additem/additem';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses: Observable<any[]>;
  constructor(public navCtrl: NavController, public expenseProvider: ExpenseProvider, public db: AngularFireDatabase) {
    //expenseProvider.addExpense(getDate(),)
  }

  ionViewDidLoad() {
    this.getExpense()
  }
  ionViewWillEnter() {
    this.getExpense()
  }
  gotoAddItem() {
    this.navCtrl.push(AdditemPage)
  }
  async getExpense() {
    this.expenses = this.db.list('expenses').valueChanges();
    console.log(this.expenses);
    console.log("Hello from getExpense");
    // sql
    // let expense = await this.expenseProvider.getExpense()
    // console.log(expense);
    // // for (var i = 0; i < expense.rows.length; i++) {
    // //   this.expenses.push({trandate: expense.rows.item(i).trandate, description: expense.rows.item(i).description, amount: expense.rows.item(i).amount })
    // // }
    // console.log(this.expenses);
  }

}
