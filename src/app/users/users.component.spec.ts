import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsresComponent } from './usres.component';

describe('UsresComponent', () => {
  let component: UsresComponent;
  let fixture: ComponentFixture<UsresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
