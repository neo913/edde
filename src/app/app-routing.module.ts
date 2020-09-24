import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'                                                                         },
  { path: 'Home',     loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)           },
  { path: 'contact',  loadChildren: () => import('./contact/contact-routing.module').then(m => m.ContactRoutingModule)  },
  { path: 'errors',   loadChildren: () => import('./errors/errors-routing.module').then(m => m.ErrorsRoutingModule)     },
  { path: '**', redirectTo: '/errors'                                                                                   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
