import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the ExpenseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpenseProvider {
  private db: SQLiteObject;
  constructor(public http: Http, private sqlite: SQLite) {
    console.log('Hello ExpenseProvider Provider');
  }
  getDB(): Promise<SQLiteObject> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db)
      } else {
        this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS trans (id INTEGER PRIMARY KEY,trandate DATETIME,category INTEGER,description TEXT,amount DOUBLE )', {})
            .then((res) => {
              console.log('Executed SQL')
              this.db = db
              resolve(this.db)
            })
            .catch((e) => {
              console.log(e)
              reject(e)
            });
        })
      }
    });


  }

  async addExpense(date, type = 1, description, amount) {
    let db = await this.getDB()
    console.log("this is addexpense");
    console.log(db);
    db.executeSql('INSERT INTO trans VALUES(NULL,?,?,?,?)', [date, type, description, amount])
  }

  getExpense() {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        db.executeSql('SELECT * FROM trans ORDER BY rowid DESC', {})
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    });
  }
}
