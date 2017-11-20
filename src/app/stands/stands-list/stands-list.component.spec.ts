import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsListComponent } from './stands-list.component';

describe('StandsListComponent', () => {
  let component: StandsListComponent;
  let fixture: ComponentFixture<StandsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
