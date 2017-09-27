import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {DomSanitizer} from '@angular/platform-browser';
import {MdIconModule, MdIconRegistry} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdIconModule
    ],
    exports: [
        MdIconModule
    ],
    declarations: []
})
export class MaterialImportModule {
    constructor(mdIconRegistry: MdIconRegistry,
                sanitizer: DomSanitizer) {
        mdIconRegistry
            .addSvgIcon('the_ball',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/soccer-ball.svg'));
    }
}
