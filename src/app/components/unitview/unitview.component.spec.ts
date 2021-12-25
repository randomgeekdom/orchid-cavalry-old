import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitviewComponent } from './unitview.component';

describe('UnitviewComponent', () => {
  let component: UnitviewComponent;
  let fixture: ComponentFixture<UnitviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
