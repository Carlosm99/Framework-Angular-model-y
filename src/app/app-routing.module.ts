import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorridasComponent } from './pages/corridas/corridas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { VercorridasComponent } from './pages/vercorridas/vercorridas.component';
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
