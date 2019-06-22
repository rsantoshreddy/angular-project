import { TestBed } from '@angular/core/testing';

import { ServerServisesService } from './server-servises.service';

describe('ServerServisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerServisesService = TestBed.get(ServerServisesService);
    expect(service).toBeTruthy();
  });
});
