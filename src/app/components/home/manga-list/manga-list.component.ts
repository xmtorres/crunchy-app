import { Component, OnInit, Input } from '@angular/core';
import { Manga } from '../../../models/manga';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {


  @Input() mangas: Manga[];

  constructor() { }

  ngOnInit(): void {
  }

}
