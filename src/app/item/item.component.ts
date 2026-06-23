import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  items = [
    { id: 1, name: 'Товар 1', price: 1000 },
    { id: 2, name: 'Товар 2', price: 2000 },
    { id: 3, name: 'Товар 3', price: 3000 }
  ];
}