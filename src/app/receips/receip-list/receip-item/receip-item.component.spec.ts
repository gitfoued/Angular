import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipItemComponent } from './receip-item.component';

describe('ReceipItemComponent', () => {
  let component: ReceipItemComponent;
  let fixture: ComponentFixture<ReceipItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipItemComponent]
    });
    fixture = TestBed.createComponent(ReceipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
