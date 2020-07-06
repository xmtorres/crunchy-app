import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailType } from '../../../assets/enums/detailtype';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { MangaService } from 'src/app/services/manga-service/manga.service';
import { Anime } from 'src/app/models/anime';
import { Manga } from 'src/app/models/manga';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  routeId: number;
  detailType: string;
  isAnime: boolean;
  isManga: boolean;
  anime: Anime;
  manga: Manga;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private mangaService: MangaService,
  ) {}

  ngOnInit(): void {
    this.routeId = +this.route.snapshot.paramMap.get('id');
    this.detailType = this.route.snapshot.paramMap.get('type');

    if(this.detailType === DetailType.ANIME){
      this.getAnime();
      this.isAnime = true;
    } else if(this.detailType === DetailType.MANGA){
      this.getManga();
      this.isManga = true;
    }
  }

  getAnime(): void{
    this.animeService.getAnime(this.routeId)
      .subscribe(anime => this.anime = anime);
  }

  getManga(): void{
    this.mangaService.getManga(this.routeId)
      .subscribe(manga => this.manga = manga);
  }
}
