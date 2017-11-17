import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// import { ExpenseProvider } from '../../providers/expense/expense'
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
  itemRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
    this.itemRef =  db.list('expenses');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  saveData(){
    //this.expenseProvider.addExpense(this.data.date,1,this.data.description,this.data.amount)
    this.itemRef.push({
      trandate:this.data.date,
      category:1,
      description:this.data.description,
      amount:this.data.amount
    })
    this.navCtrl.pop()
  }
}
