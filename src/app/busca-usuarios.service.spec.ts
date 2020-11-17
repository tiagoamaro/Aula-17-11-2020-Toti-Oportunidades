import { TestBed } from '@angular/core/testing';

import { BuscaUsuariosService } from './busca-usuarios.service';

describe('BuscaUsuariosService', () => {
  let service: BuscaUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
