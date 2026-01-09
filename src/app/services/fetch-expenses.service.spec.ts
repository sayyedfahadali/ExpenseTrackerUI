import { TestBed } from '@angular/core/testing';

import { FetchExpensesService } from './fetch-expenses.service';

describe('FetchExpensesService', () => {
  let service: FetchExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
