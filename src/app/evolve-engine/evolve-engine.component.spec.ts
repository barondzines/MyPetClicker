import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolveEngineComponent } from './evolve-engine.component';

describe('EvolveEngineComponent', () => {
  let component: EvolveEngineComponent;
  let fixture: ComponentFixture<EvolveEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolveEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolveEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
