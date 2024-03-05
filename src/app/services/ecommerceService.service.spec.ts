/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EcommerceServiceService } from './ecommerceService.service';

describe('Service: EcommerceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcommerceServiceService]
    });
  });

  it('should ...', inject([EcommerceServiceService], (service: EcommerceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
