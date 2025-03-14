import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenresListComponent } from './genres-list.component';

describe('MovieGenresListComponent', () => {
  let component: MovieGenresListComponent;
  let fixture: ComponentFixture<MovieGenresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGenresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
