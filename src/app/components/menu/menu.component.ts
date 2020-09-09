import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.componentes = this.dataSrv.getMenuOptions();
  }

}
