import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  data = { trandate:"", type:"", description:"", amount:0 };
  key:string;
  itemRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
    this.itemRef =  db.list('expenses');
  }

  ionViewDidLoad() {
    let data = this.navParams.get('data')
    console.log(data);
    this.data = data.expense;
    this.key = data.expense.key;
  }
  saveData() {
    //this.expenseProvider.addExpense(this.data.date,1,this.data.description,this.data.amount)
    this.itemRef.update(this.key,{
      trandate: this.data.trandate,
      category: 1,
      description: this.data.description,
      amount: this.data.amount
    })
    this.navCtrl.pop()
  }
}
