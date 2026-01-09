import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemoveColumnComponent } from './edit-remove-column.component';

describe('EditRemoveColumnComponent', () => {
  let component: EditRemoveColumnComponent;
  let fixture: ComponentFixture<EditRemoveColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRemoveColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRemoveColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
