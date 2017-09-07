import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooComponent } from './boo.component';
var GooComponent = /** @class */ (function () {
    function GooComponent(activatedRoute) {
        if (activatedRoute && activatedRoute.routeConfig) {
            // Router.resetConfig() cannot be used here
            // because child route config in lazy module cannot be seen by using Router.
            activatedRoute.routeConfig.children = [
                {
                    path: "boo", component: BooComponent
                }
            ];
        }
    }
    GooComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-goo',
                    template: "\n  <h1>Hello Goo</h1>\n  <a routerLink=\"boo\">to boo</a>\n  <router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    GooComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
    ]; };
    return GooComponent;
}());
export { GooComponent };
//# sourceMappingURL=goo.component.js.map