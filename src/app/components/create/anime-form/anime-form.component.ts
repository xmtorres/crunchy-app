import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Anime } from 'src/app/models/anime';
import { Category } from 'src/app/models/category';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})

export class AnimeFormComponent implements OnInit {

  animeForm: FormGroup;
  id: number;
  anime: Anime;
  categories: Category[];


  constructor(private animeService: AnimeService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getCategories();

    this.id = +this.route.snapshot.paramMap.get('id');
    this.id ? this.getCurrentAnime() : this.setEmptyInitialValues();
  }

  createForm() {
    this.animeForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      categoryId: ['', [Validators.required]],
      episodes: ['', [Validators.required]],
      isComplete: [false],
      imageUrl: ['', [Validators.required]],
    });
  }

  setEmptyInitialValues(){
    this.anime = {
      id: null,
      title: '',
      description: '',
      categoryId: null,
      episodes: null,
      isComplete: false,
      imageURL: '',
    };
  }

  onSubmitClick(): void{
    debugger;
    console.log(this.anime);
  }

  getCurrentAnime(): void{
    this.animeService.getAnime(this.id)
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
