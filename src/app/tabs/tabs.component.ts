import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';  

@Component({
  selector: 'app-tabs',
  standalone: true,  
  imports: [
    CommonModule,    
    MatTabsModule    
  ],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs = [
    { label: 'Вкладка 1', content: 'Содержимое первой вкладки' },
    { label: 'Вкладка 2', content: 'Содержимое второй вкладки' },
    { label: 'Вкладка 3', content: 'Содержимое третьей вкладки' }
  ];
}