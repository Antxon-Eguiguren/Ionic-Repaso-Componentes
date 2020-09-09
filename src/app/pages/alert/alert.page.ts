import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  name = '';

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón Cancelar');
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInput() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Input',
      subHeader: 'Introduce tu nombre:',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Botón Cancelar');
          }
        }, {
          text: 'OK',
          handler: (formData) => {
            this.name = formData.name;
          }
        }
      ]
    });

    await alert.present();
  }

}
