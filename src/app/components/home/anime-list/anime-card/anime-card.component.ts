import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../../../../models/anime';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {

  @Input() anime: Anime;

  constructor() { }

  ngOnInit(): void {

  }

}
