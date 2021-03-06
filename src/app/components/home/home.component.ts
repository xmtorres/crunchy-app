import { Component, OnInit, Inject } from '@angular/core';
import { Anime } from '../../models/anime';
import { Manga } from '../../models/manga';
import { Category } from '../../models/category';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { MangaService } from 'src/app/services/manga-service/manga.service';
import { CategoryService } from 'src/app/services/category-service/category.service';

import { CATEGORIES } from '../../../assets/mocks/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes: Anime[];
  mangas: Manga[];
  categories: Category[] = CATEGORIES;

  constructor(private animeService: AnimeService,
              private mangaService: MangaService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAnimes();
    this.getMangas();
  }

  getAnimes(): void {
    this.animeService.getAnimes()
      .subscribe(animes => this.animes = animes);
  }

  getMangas(): void{
    this.mangaService.getMangas()
      .subscribe(mangas => this.mangas = mangas);
  }

  getCategories(): void{
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
