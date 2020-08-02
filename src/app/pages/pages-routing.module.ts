import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_NAVIGATOR} from '../constant/app-navigator.constant';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_NAVIGATOR.BOOKS
  },
  {
    path: APP_NAVIGATOR.BOOKS,
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
