import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProdactComponent } from './prodact/prodact.component';
import { ProdactlistComponent } from './prodactlist/prodactlist.component';
import { ProdectDitalsComponent } from './prodect-ditals/prodect-ditals.component';

const routes: Routes = [  { path: '', component: ProdactlistComponent },  {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{ path: 'card/:id', component: ProdectDitalsComponent },
{ path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
