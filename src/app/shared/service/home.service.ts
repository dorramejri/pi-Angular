import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http : HttpClient
  ) { }
  getHomeData() {
    return this.http.get('./../../assets/data/homeData.json')
  }
}
