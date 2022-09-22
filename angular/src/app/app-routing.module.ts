import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
{
  path:'aboutus',
  component:AboutusComponent,
  children:[
    {
      path:'comp1',
      component:Component1Component,
      children:[
        {
          path:'parent',
          component:ParentComponent,
        },
        ]
    },
       {
        path:'comp2',
        component:Component2Component,
      },
      {
        path:':user',
        component:Component1Component,
      },
      
    
      ]
    },
    
  {
   
  path:'contactus',
  component:ContactusComponent,
}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
