import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = new Array(20);
  finished: boolean;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando los siguientes items...');

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        this.finished = true;
        return;
      }
      const nuevoArr = new Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000);
  }

}
