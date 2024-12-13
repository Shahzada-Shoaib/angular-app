import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  apiURL: string = "https://projectapi.gerasim.in/api/OnlineLearning/";

  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get(this.apiURL + "GetAllVideos")
  }
}
