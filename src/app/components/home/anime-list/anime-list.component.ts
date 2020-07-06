import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../../../models/anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  @Input() animes: Anime[];

  constructor() { }

  ngOnInit(): void {
  }

}
