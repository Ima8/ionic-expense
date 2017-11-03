import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense'
/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  data = { date:"", type:"", description:"", amount:0 };
  constructor(public navCtrl: NavController, public navParams: NavParams,public expenseProvider:ExpenseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  saveData(){
    this.expenseProvider.addExpense(this.data.date,1,this.data.description,this.data.amount)
    this.navCtrl.pop()
  }
}
