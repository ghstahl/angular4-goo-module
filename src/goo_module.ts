import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GooComponent }  from './goo.component';
import { BooComponent } from './boo.component';

@NgModule({
  imports:      [ CommonModule, 
    RouterModule.forChild([
      { path: '', component: GooComponent }
    ])
  ],
  declarations: [ GooComponent, BooComponent ],
  entryComponents: [ BooComponent ]
})
export class GooModule { }