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
    {
      id: 2,
      name: 'Audi',
      price: 200,
      img: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Mercedes',
      price: 300,
      img: 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Ferrari',
      price: 400,
      img: 'https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Lamborghini',
      price: 500,
      img: 'https://images.pexels.com/photos/2811501/pexels-photo-2811501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
