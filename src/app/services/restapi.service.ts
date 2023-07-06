import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPassword } from '../interfaces/IPassword'

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  url = "http://localhost:3000/passwords";

  constructor(private http:HttpClient) { }
  
  GetPasswords() {
    return this.http.get(this.url);
  }

  AddPassword(data: any)
  {
    const passwordData: IPassword = { id: 3, category: data.category, app: data.app, userName: data.userName, encryptedPassword: btoa(data.password)};
    return this.http.post<IPassword>(this.url, passwordData);
  }
}
