import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipListComponent } from './receip-list.component';

describe('ReceipListComponent', () => {
  let component: ReceipListComponent;
  let fixture: ComponentFixture<ReceipListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipListComponent]
    });
    fixture = TestBed.createComponent(ReceipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
