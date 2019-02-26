import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TODO - 1: Import ReactiveFormsModule from '@angular/forms'.

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsTableComponent } from './components/home/albums-table/albums-table.component';
import { ImagesTableComponent } from './components/home/images-table/images-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsTableComponent,
    ImagesTableComponent
  ],
  // TODO - 2: Add ReactiveFormsModule to the imports.
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }