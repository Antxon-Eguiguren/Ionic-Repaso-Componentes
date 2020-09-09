import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items: any[] = new Array(40);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  onClick(item: number) {
    console.log('Item', item);
    this.popoverCtrl.dismiss({
      item
    });
  }

}
