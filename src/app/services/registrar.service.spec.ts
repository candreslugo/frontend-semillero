import { TestBed } from '@angular/core/testing';

import { RegistrarService } from './registrar.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrarService', () => {
  let service: RegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[RegistrarService]
    });
    service = TestBed.inject(RegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
/*
describe("registrarService",()=>{
  it("")

})
*/
