import { TestBed } from '@angular/core/testing';

import { QuoteCardsService } from './quote-cards.service';

describe('QuoteCardsService', () => {
  let service: QuoteCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
