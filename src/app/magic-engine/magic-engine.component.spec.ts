import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicEngineComponent } from './magic-engine.component';

describe('MagicEngineComponent', () => {
  let component: MagicEngineComponent;
  let fixture: ComponentFixture<MagicEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
