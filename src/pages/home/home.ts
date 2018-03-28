import {Observable} from "rxjs/Rx";
import {Component} from "@angular/core";
import * as _ from "lodash";

import {
  NavController
} from "ionic-angular";
import {
  AngularFireDatabase, AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import {Company} from "../datatypes/company";
import {UUID} from "angular2-uuid";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  itemRef: AngularFireObject<Company>;
  companiesRef: AngularFireList<Company>;

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,) {
    this.itemRef = db.object('company');
    this.companiesRef = db.list('companies');
  }

  addNewItem() {
    let company: Company = new Company();
    company.id = UUID.UUID();
    company.name = `ANG_${_.random(100, 999)}`;
    company.location = `${_.random(2000, 3000)}, CMT8, HCM`;
    this.itemRef.set(company);
  }

  updateItem() {
    this.itemRef.update({location: '222 - LTK - Q10'})
  }

  deleteItem() {
    this.itemRef.remove();
  }

  addItemList() {
    let company: Company = new Company();
    company.id = UUID.UUID();
    company.name = `ANG_${_.random(100, 999)}`;
    company.location = `${_.random(2000, 3000)}, CMT8, HCM`;
    this.companiesRef.push(company).then((data) => {
      console.log(data);
    });
  }

  updateItemList() {
    let company: Company = new Company();
    company.id = UUID.UUID();
    company.name = `ANG_${_.random(100, 999)}`;
    company.location = `${_.random(2000, 3000)}, LTK`;

    this.companiesRef.update('-L8gGt__Q4i_Wp0VdTLT', company);

  }

  deleteList() {
    this.companiesRef.remove('-L8gGt__Q4i_Wp0VdTLT');
  }

}
