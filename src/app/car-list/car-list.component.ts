import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  carList: any[] = [
    {id: 1, name: 'BMW', price: 100},
    {id: 2, name: 'Audi', price: 200},
    {id: 3, name: 'Mercedes', price: 300},
    {id: 4, name: 'Ferrari', price: 400},
    {id: 5, name: 'Lamborghini', price: 500},
  ];

  constructor() {}

  ngOnInit(): void {}
}
