import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { Category } from 'src/app/models/category';
import { AnimeService } from 'src/app/services/anime-service/anime.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../../modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() anime: Anime;
  category: Category;

  constructor(private categoryService: CategoryService,
              private animeService: AnimeService,
              private location: Location,
              public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    this.anime ? this.getCategory() : console.log(this.anime) ;
  }

  getCategory(): void {
    this.categoryService.getCategory(this.anime.categoryId)
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
        this.deleteAnime();
      };
    });
  }

  goBack(): void{
    this.location.back();
  }

  deleteAnime(): void {
    this.animeService.deleteAnime(this.anime.id)
      .subscribe(() => this.goBack());
  }
}
