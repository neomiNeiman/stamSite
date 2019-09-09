import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent, },
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
