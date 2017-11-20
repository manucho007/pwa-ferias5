import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsAddComponent } from './stands-add.component';

describe('StandsAddComponent', () => {
  let component: StandsAddComponent;
  let fixture: ComponentFixture<StandsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
