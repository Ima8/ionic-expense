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
  db: SQLiteObject;
  constructor(public http: Http, private sqlite: SQLite) {
    console.log('Hello ExpenseProvider Provider');

  }
  getDB(): SQLiteObject {
    if (this.db) {
      return this.db
    } else {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql('CREATE TABLE IF NOT EXISTS trans (id INTEGER PRIMARY KEY,trandate DATETIME,category INTEGER,description TEXT,amount DOUBLE )', {})
          .then(res => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
    }

  }

}
