import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterialImportModule} from './modules/material-import/material-import.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialImportModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
