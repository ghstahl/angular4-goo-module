import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooComponent } from './boo.component';

@Component({
  selector: 'my-goo',
  template: `
  <h1>Hello Goo</h1>
  <a routerLink="boo">to boo</a>
  <router-outlet></router-outlet>`
})
export class GooComponent { 
  constructor(activatedRoute: ActivatedRoute) {
      if(activatedRoute && activatedRoute.routeConfig){
        // Router.resetConfig() cannot be used here
            // because child route config in lazy module cannot be seen by using Router.
            activatedRoute.routeConfig.children = [
            {
                path: "boo", component: BooComponent
            }
            ];
      }
    
  }
}