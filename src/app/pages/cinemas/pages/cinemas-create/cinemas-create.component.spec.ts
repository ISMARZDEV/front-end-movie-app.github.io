import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasCreateComponent } from './cinemas-create.component';

describe('CinemasCreateComponent', () => {
  let component: CinemasCreateComponent;
  let fixture: ComponentFixture<CinemasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
