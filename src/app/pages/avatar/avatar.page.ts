import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  writers: Writer[] = [
    {
      name: 'Stan Lee',
      photo: '../../../assets/img/stan-lee.jpg'
    },
    {
      name: 'Paul Auster',
      photo: '../../../assets/img/paul-auster.jpg'
    },
    {
      name: 'Noah Gordon',
      photo: '../../../assets/img/noah-gordon.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Writer {
  name: string;
  photo: string;
}
