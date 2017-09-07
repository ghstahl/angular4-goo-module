import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GooComponent } from './goo.component';
import { BooComponent } from './boo.component';
var GooModule = /** @class */ (function () {
    function GooModule() {
    }
    GooModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule,
                        RouterModule.forChild([
                            { path: '', component: GooComponent }
                        ])
                    ],
                    declarations: [GooComponent, BooComponent],
                    entryComponents: [BooComponent]
                },] },
    ];
    /** @nocollapse */
    GooModule.ctorParameters = function () { return []; };
    return GooModule;
}());
export { GooModule };
//# sourceMappingURL=goo_module.js.map