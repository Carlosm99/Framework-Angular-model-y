import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { CorridasComponent } from './pages/corridas/corridas.component';
import { VercorridasComponent } from './pages/vercorridas/vercorridas.component';
import { UsariosComponent } from './pages/usarios/usarios.component';
import { VerusuariosComponent } from './pages/verusuarios/verusuarios.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VeradminComponent } from './pages/veradmin/veradmin.component';
import { BoletosComponent } from './pages/boletos/boletos.component';
import { VerboletosComponent } from './pages/verboletos/verboletos.component';
import { BuslineComponent } from './pages/busline/busline.component';
import { VerbuslineComponent } from './pages/verbusline/verbusline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WrapperComponent,
    CorridasComponent,
    VercorridasComponent,
    UsariosComponent,
    VerusuariosComponent,
    AdminComponent,
    VeradminComponent,
    BoletosComponent,
    VerboletosComponent,
    BuslineComponent,
    VerbuslineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //material para el sidebar
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
