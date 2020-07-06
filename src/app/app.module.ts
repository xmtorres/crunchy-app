import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AnimeFormComponent } from './components/create/anime-form/anime-form.component';
import { CategoryFormComponent } from './components/create/category-form/category-form.component';
import { MangaFormComponent } from './components/create/manga-form/manga-form.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { AnimeCardComponent } from './components/home/anime-list/anime-card/anime-card.component';
import { MangaCardComponent } from './components/home/manga-list/manga-card/manga-card.component';
import { AnimeListComponent } from './components/home/anime-list/anime-list.component';
import { MangaListComponent } from './components/home/manga-list/manga-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeFormComponent,
    CategoryFormComponent,
    MangaFormComponent,
    DetailComponent,
    CreateComponent,
    AnimeCardComponent,
    MangaCardComponent,
    AnimeListComponent,
    MangaListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Material imports
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
