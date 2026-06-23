import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'items',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];