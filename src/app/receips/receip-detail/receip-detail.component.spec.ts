import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipDetailComponent } from './receip-detail.component';

describe('ReceipDetailComponent', () => {
  let component: ReceipDetailComponent;
  let fixture: ComponentFixture<ReceipDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipDetailComponent]
    });
    fixture = TestBed.createComponent(ReceipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
