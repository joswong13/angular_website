import { TestBed, inject } from '@angular/core/testing';

import { CalculateMatGridService } from './calculate-mat-grid.service';

describe('CalculateMatGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateMatGridService]
    });
  });

  it('should be created', inject([CalculateMatGridService], (service: CalculateMatGridService) => {
    expect(service).toBeTruthy();
  }));
});
