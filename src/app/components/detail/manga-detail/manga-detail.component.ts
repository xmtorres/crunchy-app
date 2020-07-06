import { Component, OnInit, Input } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { Category } from 'src/app/models/category';
import { MangaService } from 'src/app/services/manga-service/manga.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  @Input() manga: Manga;
  category: Category;

  constructor(private categoryService: CategoryService,
              private mangaService: MangaService,
              private location: Location,
              public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  ngOnChanges(): void{
    this.manga ? this.getCategory() : console.log(this.manga) ;
  }

  getCategory(): void {
    this.categoryService.getCategory(this.manga.categoryId)
      .subscribe(category => this.category = category);
  }

  openDeleteDialog(): void{
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '350px',
      data: { accepted: false }
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed');
      if(data){
        this.deleteManga();
      };
    });
  }

  goBack(): void{
    this.location.back();
  }

  deleteManga(): void {
    this.mangaService.deleteManga(this.manga.id)
      .subscribe(() => this.goBack() );
  }
}

