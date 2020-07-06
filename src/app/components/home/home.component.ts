import { Component, OnInit } from '@angular/core';
import { Anime } from '../../models/anime';
import { Manga } from '../../models/manga';
import { Category } from '../../models/category';

import { ANIMES } from '../../../assets/mocks/animes';
import { MANGAS } from '../../../assets/mocks/mangas';
import { CATEGORIES } from '../../../assets/mocks/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes: Anime[];
  mangas: Manga[];
  categories: Category[];

  constructor() { }

  ngOnInit(): void {
    this.animes = ANIMES;
    this.mangas = MANGAS;
    this.categories = CATEGORIES;
  }

}
