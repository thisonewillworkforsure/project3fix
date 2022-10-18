import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ResetPasswordService } from './reset-password.service';

describe('ResetPasswordService', () => {
  let service: ResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResetPasswordService]
    });
    service = TestBed.inject(ResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
