import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDetailComponent } from './light-detail.component';

describe('LightDetailComponent', () => {
  let component: LightDetailComponent;
  let fixture: ComponentFixture<LightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
