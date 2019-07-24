import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakerEngineComponent } from './caretaker-engine.component';

describe('CaretakerEngineComponent', () => {
  let component: CaretakerEngineComponent;
  let fixture: ComponentFixture<CaretakerEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretakerEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakerEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
