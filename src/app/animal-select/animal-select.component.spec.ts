import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSelectComponent } from './animal-select.component';

describe('AnimalSelectComponent', () => {
  let component: AnimalSelectComponent;
  let fixture: ComponentFixture<AnimalSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
