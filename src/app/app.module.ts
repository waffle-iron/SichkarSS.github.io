import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterialExportsModule} from './modules/material-exports/material-exports.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        MaterialExportsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
