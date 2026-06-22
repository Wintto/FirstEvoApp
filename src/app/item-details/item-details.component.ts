import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.parent?.snapshot.paramMap.get('id') || '';
    console.log(' Item Details - Параметр маршрута ID:', this.itemId);
    
    this.route.parent?.params.subscribe(params => {
      console.log(' Item Details - ID через subscribe:', params['id']);
    });
  }
}