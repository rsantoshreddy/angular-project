import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {}

  public putData(serialNumber: string, licenceFile: Blob, username: string, password: string) {
    console.log(serialNumber, licenceFile, username, password);
  }
}
