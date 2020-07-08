import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Anime } from 'src/app/models/anime';
import { Category } from 'src/app/models/category';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})

export class AnimeFormComponent implements OnInit {

  animeForm: FormGroup;
  isEditing: boolean;
  id: number;
  anime: Anime;
  categories: Category[];
  isReadyToSubmit: boolean;

  constructor(private animeService: AnimeService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.getCategories();

    this.id = +this.route.snapshot.paramMap.get('id');
    this.id ? this.setEditingMode() : this.setEmptyInitialValues();
  }

  setEditingMode(){
    this.isEditing = true;
    this.getCurrentAnime();
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
    this.isEditing = false;
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
    if(this.animeForm.valid){
      this.isEditing ? this.updateAnime() : this.createAnime();
    }
  }

  onCancelClick(): void{
    this.location.back();
  }

  getCurrentAnime(): void{
    this.animeService.getAnime(this.id)
      .subscribe(anime => this.anime = anime);
  }

  updateAnime(): void{
    this.animeService.updateAnime(this.anime)
      .subscribe(() => this.showMessageSuccess(), error => console.error(error));
  }

  createAnime(): void{
    this.animeService.addAnime(this.anime)
      .subscribe(() => this.showMessageSuccess(), error => console.error(error));
  }

  getCategories(): void{
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 800,
    });
  }

  showMessageSuccess(){

    const message = this.isEditing ? 'The anime was successfully updated!' : 'The anime was successfully created!';

    this.openSnackBar(message);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
