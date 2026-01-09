import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTableComponent } from './expenseTable.component';

describe('HomepageComponent', () => {
  let component: ExpenseTableComponent;
  let fixture: ComponentFixture<ExpenseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
