import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  carList: any[] = [
    {
      id: 1,
      name: 'Cadillac Scalade 2021',
      price: 100,
      img: 'https://cdn.topgear.es/sites/navi.axelspringer.es/public/styles/950/public/media/image/2022/02/cadillac-escalade-2022-2612119.jpg?itok=dU926WBo',
    },
    {id: 2, name: 'Audi', price: 200, img: ''},
    {id: 3, name: 'Mercedes', price: 300, img: ''},
    {id: 4, name: 'Ferrari', price: 400, img: ''},
    {id: 5, name: 'Lamborghini', price: 500, img: ''},
  ];

  constructor() {}

  ngOnInit(): void {}
}
