import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  heroId: number;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.heroId = +this.route.snapshot.paramMap.get('id');
  }

}
