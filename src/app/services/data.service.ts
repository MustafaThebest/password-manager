import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  constructor() { }

  sendId(id: number) {
    this.idSource.next(id);
  }
}
