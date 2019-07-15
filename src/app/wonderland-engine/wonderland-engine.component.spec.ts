import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderlandEngineComponent } from './wonderland-engine.component';

describe('WonderlandEngineComponent', () => {
  let component: WonderlandEngineComponent;
  let fixture: ComponentFixture<WonderlandEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderlandEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderlandEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
