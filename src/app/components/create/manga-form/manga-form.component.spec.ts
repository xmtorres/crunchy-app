import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaFormComponent } from './manga-form.component';

describe('MangaFormComponent', () => {
  let component: MangaFormComponent;
  let fixture: ComponentFixture<MangaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
