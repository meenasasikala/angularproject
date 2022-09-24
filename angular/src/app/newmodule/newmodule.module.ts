import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmoduleRoutingModule } from './newmodule-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    NewmoduleRoutingModule
  ]
})
export class NewmoduleModule { }
