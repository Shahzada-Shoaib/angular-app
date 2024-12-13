import { Component, inject, OnInit } from '@angular/core';
import {VideoServiceService} from '../video-service.service'
import { videoModel } from '../model/video';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [], 
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {

  videoSrv:any = inject(VideoServiceService);
  videoList : videoModel []=[];
  videoObj: videoModel[] =[]; 

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videoSrv.getVideos().subscribe((result:any)=>{
      this.videoList = result.data;

    })
  }

  
}
