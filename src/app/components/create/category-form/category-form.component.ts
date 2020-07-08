import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  categoryForm: FormGroup;
  isEditing: boolean;
  id: number;
  category: Category;
  categories: Category[];


  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();

    this.id = +this.route.snapshot.paramMap.get('id');
    this.id ? this.setEditingMode() : this.setEmptyInitialValues();
  }

  setEditingMode(){
    this.isEditing = true;
    this.getCurrentCategory();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  setEmptyInitialValues(){
    this.isEditing = false;
    this.category = {
      id: null,
      title: '',
      description: '',
    };
  }

  onSubmitClick(): void{
    if(this.categoryForm.valid){
      this.isEditing ? this.updateCategory() : this.createCategory();
    }
  }

  onCancelClick(): void{
    this.location.back();
  }

  getCurrentCategory(): void{
    this.categoryService.getCategory(this.id)
      .subscribe(category => this.category = category);
  }

  createCategory(): void{
    this.categoryService.addCategory(this.category)
      .subscribe(() => this.showMessageSuccess(), error => console.error(error));
  }

  updateCategory(): void{
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.showMessageSuccess(), error => console.error(error));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 800,
    });
  }

  showMessageSuccess(){

    const message = this.isEditing ? 'The category was successfully updated!' : 'The category was successfully created!';

    this.openSnackBar(message);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
