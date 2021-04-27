import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CadeiraComponent} from './views/cadeira/cadeira.component';
import {SofaComponent} from './views/sofa/sofa.component';
import {MesaComponent} from './views/mesa/mesa.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
path: "cadeira",
component: CadeiraComponent
},
{
path: "sofa",
component: SofaComponent
},
{
path: "mesa",
component: MesaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
