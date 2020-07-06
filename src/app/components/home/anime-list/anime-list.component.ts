import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../../../models/anime';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  @Input() animes: Anime[];
  @Input() categories: Category[];

  constructor() { }

  ngOnInit(): void {
  }

}
