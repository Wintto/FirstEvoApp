import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';  

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterOutlet, RouterLink],  
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log('Item ID:', this.itemId);
  }
}