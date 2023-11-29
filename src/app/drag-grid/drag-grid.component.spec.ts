import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragGridComponent } from './drag-grid.component';

describe('DragGridComponent', () => {
  let component: DragGridComponent;
  let fixture: ComponentFixture<DragGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragGridComponent]
    });
    fixture = TestBed.createComponent(DragGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
