import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albums: Observable<any>;
  textoBuscar = '';

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.albums = this.dataSrv.getAlbums();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

}
