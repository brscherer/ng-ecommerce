import { IProduct } from './../../shared/models/product.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });

    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call products endpoint', done => {
    httpMock.verify();
    const mockReponse: IProduct[] = [
      {
        id: '1',
        name: 'Mock Product',
        photo: 'photo',
        price: 200.0,
      },
    ];

    service.getProducts().subscribe(response => {
      expect(response).toBe(mockReponse);
      done();
    });

    const request = httpMock.expectOne({ method: 'GET' });
    request.flush(mockReponse);
  });
});
