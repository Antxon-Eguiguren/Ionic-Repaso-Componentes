import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  gender = '';
  hair = '';
  toppings: string[];
  pets: string[];

  checkboxes: any[] = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  radios: any[] = [
    {
      name: 'Biff'
    },
    {
      name: 'Griff'
    },
    {
      name: 'Buford'
    }
  ];

  toggles: any[] = [
    {
      name: 'Pepperoni',
      selected: true,
      disabled: false
    },
    {
      name: 'Sausage',
      selected: false,
      disabled: false
    },
    {
      name: 'Mushrooms',
      selected: true,
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickCheckbox(check) {
    console.log(check);
  }

  onClickRadio(radio) {
    console.log(radio);
  }

  onChangeSelectSingle(option) {
    console.log(option);
  }

  onChangeSelectMultiple(options) {
    console.log(options);
  }

  onClickToggle(toggle) {
    console.log(toggle);
  }

}
