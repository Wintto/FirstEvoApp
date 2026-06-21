import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { AddFivePipe } from './add-five.pipe';  
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    AddFivePipe,        
    NgFor,              
    NgSwitch,           
    NgSwitchCase,       
    NgSwitchDefault,
    DatePipe    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello';
  
  arrayCats = [
    { name: 'Cat_1' },
    { name: 'Cat_2' },
    { name: 'Cat_3' },
    { name: 'Cat_4' },
    { name: 'Cat_5' }
  ];

  currentDate: Date = new Date();

  switchString: string = 'Car';
}