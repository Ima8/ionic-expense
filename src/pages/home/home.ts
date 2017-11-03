import { AdditemPage } from './../additem/additem';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  expenses: any = [];

  constructor(public navCtrl: NavController, public expenseProvider: ExpenseProvider) {
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
    this.expenses = []
    let expense = await this.expenseProvider.getExpense()
    console.log(expense);
    for (var i = 0; i < expense.rows.length; i++) {
      this.expenses.push({trandate: expense.rows.item(i).trandate, description: expense.rows.item(i).description, amount: expense.rows.item(i).amount })
    }
    console.log(this.expenses);
  }

}
