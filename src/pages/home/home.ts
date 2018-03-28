import {Observable} from "rxjs/Rx";
import {Component} from "@angular/core";
import {
  ActionSheetController,
  AlertController,
  NavController
} from "ionic-angular";
import {
  AngularFireDatabase,
  AngularFireObject
} from "angularfire2/database";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public db: AngularFireDatabase,
              public actionSheetCtrl: ActionSheetController) {
    this.itemRef = db.object('item');
  }

  addNewItem() {
    this.itemRef.set({id: 1, name: 'NVG'});
  }

  updateItem() {
    this.itemRef.update({location: 'CMT8'})
  }

  deleteItem() {
    this.itemRef.remove();
  }

}
