import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
import { AnimeDetailComponent } from './components/detail/anime-detail/anime-detail.component';
import { MangaDetailComponent } from './components/detail/manga-detail/manga-detail.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';

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
    MangaListComponent,
    AnimeDetailComponent,
    MangaDetailComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material imports
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
