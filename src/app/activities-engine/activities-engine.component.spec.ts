import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesEngineComponent } from './activities-engine.component';

describe('ActivitiesEngineComponent', () => {
  let component: ActivitiesEngineComponent;
  let fixture: ComponentFixture<ActivitiesEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
