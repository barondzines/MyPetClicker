import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEngineComponent } from './animal-engine.component';

describe('AnimalEngineComponent', () => {
  let component: AnimalEngineComponent;
  let fixture: ComponentFixture<AnimalEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
