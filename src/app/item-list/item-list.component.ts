import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemId: string | null = '';
  listParam: string | null = '';
  enableParam: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.listParam = params['list'] || null;
      this.enableParam = params['enable'] || null;
      console.log(' Параметры запроса:', { 
        list: this.listParam, 
        enable: this.enableParam 
      });
    });

    this.route.parent?.params.subscribe(params => {
      this.itemId = params['id'] || '';
    });
  }

  updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { list: '1', enable: 'true' }
    });
  }

  getItems(): number[] {
    const count = this.listParam ? parseInt(this.listParam) : 3;
    const finalCount = isNaN(count) ? 3 : count;
    return Array.from({ length: finalCount }, (_, i) => i + 1);
  }
}