import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasEditComponent } from './cinemas-edit.component';

describe('CinemasEditComponent', () => {
  let component: CinemasEditComponent;
  let fixture: ComponentFixture<CinemasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
