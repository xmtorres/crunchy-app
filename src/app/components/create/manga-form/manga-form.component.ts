import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Manga } from 'src/app/models/manga';
import { Category } from 'src/app/models/category';
import { MangaService } from 'src/app/services/manga-service/manga.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.css']
})

export class MangaFormComponent implements OnInit {

  mangaForm: FormGroup;
  isEditing: boolean;
  id: number;
  manga: Manga;
  categories: Category[];

  constructor(private mangaService: MangaService,
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
    this.getCurrentManga();
    console.log(this.manga);
  }

  createForm() {
    this.mangaForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author:['', [Validators.required]],
      description: [''],
      categoryId: ['', [Validators.required]],
      chapters: ['', [Validators.required]],
      isComplete: [false],
      imageUrl: ['', [Validators.required]],
    });
  }

  setEmptyInitialValues(){
    this.isEditing = false;
    this.manga = {
      id: null,
      title: '',
      author: '',
      description: '',
      categoryId: null,
      chapters: null,
      isComplete: false,
      imageURL: '',
    };
  }

  onSubmitClick(): void{
    if(this.mangaForm.valid){
      this.isEditing ? this.updateManga() : this.createManga();
    }
  }

  onCancelClick(): void{
    this.location.back();
  }

  getCurrentManga(): void{
    this.mangaService.getManga(this.id)
      .subscribe(manga => this.manga = manga);
  }

  updateManga(): void{
    this.mangaService.updateManga(this.manga)
      .subscribe(() => this.showMessageSuccess(), error => console.error(error));
  }

  createManga(): void{
    this.mangaService.addManga(this.manga)
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

    const message = this.isEditing ? 'The manga was successfully updated!' : 'The manga was successfully created!';

    this.openSnackBar(message);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
