import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchComponent} from "./components/search/search.component";
import {routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [AppComponent, SearchComponent, NavbarComponent, AboutComponent, ArtistComponent, AlbumComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
