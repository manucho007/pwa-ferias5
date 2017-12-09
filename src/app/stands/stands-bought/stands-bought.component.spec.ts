import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsBoughtComponent } from './stands-bought.component';

describe('StandsBoughtComponent', () => {
  let component: StandsBoughtComponent;
  let fixture: ComponentFixture<StandsBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandsBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
