import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenresCreateComponent } from './genres-create.component';

describe('MovieGenresCreateComponent', () => {
  let component: MovieGenresCreateComponent;
  let fixture: ComponentFixture<MovieGenresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenresCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGenresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
