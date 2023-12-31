import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPassword } from '../interfaces/IPassword'

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  url = "http://localhost:3000/passwords";

  constructor(private http:HttpClient) { }

  GetPassword(id: number)
  {
    const temp = this.url + `/${id}`;
    return this.http.get<IPassword>(temp);
  }

  GetPasswords() {
    return this.http.get<IPassword[]>(this.url);
  }

  AddPassword(data: any)
  {
    //const passwordData: IPassword = { category: data.category, app: data.app, userName: data.userName, encryptedPassword: btoa(data.password)};
    return this.http.post<IPassword>(this.url, { category: data.category, app: data.app, userName: data.userName, encryptedPassword: btoa(data.password)});
  }

  PutPassword(id: number, data: any)
  {
    const temp = this.url + `/${id}`;
    console.log(temp);
    return this.http.put<IPassword>(temp, {category: data.category, app: data.app, userName: data.userName, encryptedPassword: btoa(data.password)});
  }

  DeletePassword(id: number)
  {
    const temp = this.url + `/${id}`;
    console.log(temp);
    return this.http.delete(temp);
  }
}
