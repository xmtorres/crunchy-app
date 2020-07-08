import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { AnimeFormComponent } from './components/create/anime-form/anime-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:type/:id', component: DetailComponent},
  { path: 'new', component: CreateComponent },
  { path: 'anime/edit/:id', component: AnimeFormComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }