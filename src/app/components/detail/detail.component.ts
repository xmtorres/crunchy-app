import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailType } from '../../../assets/enums/detailtype';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  animeId: number;
  detailType: string;
  isAnime: boolean;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.animeId = +this.route.snapshot.paramMap.get('id');
    this.detailType = this.route.snapshot.paramMap.get('type');

    console.log(this.animeId);
    console.log(this.detailType);
  }

}
