import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectDitalsComponent } from './prodect-ditals.component';

describe('ProdectDitalsComponent', () => {
  let component: ProdectDitalsComponent;
  let fixture: ComponentFixture<ProdectDitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdectDitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdectDitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
