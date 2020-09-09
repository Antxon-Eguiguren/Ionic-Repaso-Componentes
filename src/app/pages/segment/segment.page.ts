import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  segmento = '';

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.superheroes = this.dataSrv.getSuperheroes();
  }

  segmentChanged(event) {
    this.segmento = event.detail.value;

    if (this.segmento === 'all') {
      this.segmento = '';
      return;
    }
  }

}
