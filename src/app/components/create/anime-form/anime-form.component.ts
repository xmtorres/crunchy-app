import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {

  currentId: number;
  anime: Anime;
  categories: Category[];
  animeFormGroup: FormGroup;

  constructor(private animeService: AnimeService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location,
              public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCategories();
    this.currentId = +this.route.snapshot.paramMap.get('id');
    console.log(this.currentId);
    if(this.currentId){
      this.getCurrentAnime();
    }
    this.createForm();
  }

  createForm() {
    this.animeFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      categoryId: ['', [Validators.required]],
      episodes: ['', [Validators.required]],
      isComplete: ['', [Validators.required]],
      imageURL: ['', [Validators.required]]
    });
  }

  getCurrentAnime(): void{
    this.animeService.getAnime(this.currentId)
      .subscribe(anime => this.anime = anime);
  }

  updateAnime(): void{
    this.animeService.updateAnime(this.anime)
      .subscribe();
  }

  createAnime(): void{
    this.animeService.addAnime(this.anime)
      .subscribe();
  }

  getCategories(): void{
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
