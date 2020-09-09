import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;

  constructor(private dataSrv: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataSrv.getUsers();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    console.log('Favorite', user);
    this.presentToast('Saved in Favourites!  ❤');
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('Share', user);
    this.presentToast('Shared!  ✔');
    this.lista.closeSlidingItems();

  }

  delete(user) {
    console.log('Delete', user);
    this.presentToast('Deleted!  🗑');
    this.lista.closeSlidingItems();
  }
}
