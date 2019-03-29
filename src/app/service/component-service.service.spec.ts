import { TestBed } from '@angular/core/testing';

import { ComponentServiceService } from './component-service.service';

describe('ComponentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentServiceService = TestBed.get(ComponentServiceService);
    expect(service).toBeTruthy();
  });
});
