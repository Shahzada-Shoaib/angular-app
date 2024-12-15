import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { videoModel } from './model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  apiURL: string = "https://projectapi.gerasim.in/api/OnlineLearning/";

  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get(this.apiURL + "GetAllVideos")
  }
  saveVideo(obj: videoModel){
    return this.http.post(this.apiURL + "AddNewvideo",obj)
  }
  updateVideo(obj: videoModel) {
    return this.http.put(this.apiURL + "UpdateVideo", obj)
  }
  deleteVideo(id: number) {
    return this.http.delete(this.apiURL + "DeleteVideo?videoId=" + id)
  }
}
