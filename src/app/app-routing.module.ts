import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { BoletosComponent } from './pages/boletos/boletos.component';
import { BuslineComponent } from './pages/busline/busline.component';
import { CorridasComponent } from './pages/corridas/corridas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UsariosComponent } from './pages/usarios/usarios.component';
import { VeradminComponent } from './pages/veradmin/veradmin.component';
import { VerboletosComponent } from './pages/verboletos/verboletos.component';
import { VerbuslineComponent } from './pages/verbusline/verbusline.component';
import { VercorridasComponent } from './pages/vercorridas/vercorridas.component';
import { VerusuariosComponent } from './pages/verusuarios/verusuarios.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';



const routes: Routes = [
  {
  path: '',
  component: WrapperComponent,
  children:[
   
  {
    path: 'dashboard',
    component: DashboardComponent
  },
 
  {
    path: 'corridas',
    component: CorridasComponent,
    
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'vercorridas',
    component: VercorridasComponent
   },
   {
     path:'usarios',
     component: UsariosComponent
   },
   {
     path:'verusuarios',
     component: VerusuariosComponent
   },
   {
     path:'admin',
     component: AdminComponent
   },
   {
     path:'veradmin',
     component: VeradminComponent
   },
   {
    path:'boletos',
    component: BoletosComponent
  },
  {
    path:'verboletos',
    component: VerboletosComponent
  },
  {
    path:'busline',
    component: BuslineComponent
  },
  {
    path:'verbusline',
    component: VerbuslineComponent
  }
  ],
 
 },
//  {
//    path:'',
//    component:WrapperComponent ,
//    children:[
//      {
//       path: 'vercorridas',
//       component: VercorridasComponent
//      }
//    ]
// },

  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
