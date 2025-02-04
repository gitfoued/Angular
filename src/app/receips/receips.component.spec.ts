import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipsComponent } from './receips.component';

describe('ReceipsComponent', () => {
  let component: ReceipsComponent;
  let fixture: ComponentFixture<ReceipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipsComponent]
    });
    fixture = TestBed.createComponent(ReceipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
