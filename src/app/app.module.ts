import { ComponentesComponent } from './../../../jogatina marota/frontend/jogatina/src/app/componentes/componentes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './componentes/head/head.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './componentes/nav/nav.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { CadeiraComponent } from './views/cadeira/cadeira.component';
import { MesaComponent } from './views/mesa/mesa.component';
import { SofaComponent } from './views/sofa/sofa.component';
import { FoolterComponent } from './componentes/foolter/foolter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    HomeComponent,
    CadeiraComponent,
    MesaComponent,
    SofaComponent,
    FoolterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
