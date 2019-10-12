import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {path : "", redirectTo : 'library', pathMatch : 'full'},
      { path: 'library', loadChildren: '../library/library.module#LibraryPageModule' },
      { path: 'favorite', loadChildren: '../favorite/favorite.module#FavoritePageModule' },
      { path: 'quotes', loadChildren: '../quotes/quotes.module#QuotesPageModule' },
  
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
