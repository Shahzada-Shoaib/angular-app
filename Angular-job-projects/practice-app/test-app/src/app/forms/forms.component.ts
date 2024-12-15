import { Component, inject, OnInit } from '@angular/core';
import {VideoServiceService} from '../video-service.service'
import { videoModel } from '../model/video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {

  videoSrv:any = inject(VideoServiceService);
  videoList : videoModel []=[];
  videoObj: videoModel = new videoModel(); 

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videoSrv.getVideos().subscribe((result:any)=>{
      this.videoList = result.data;
    })
  }
  onSaveVideo(){
    debugger;
    this.videoSrv.saveVideo(this.videoObj).subscribe((res: any)=>{
     
     if(res.result){
      alert("this video is save")
      // this will fetch the latest data after saing the video
       this.getVideos();

     } else {
      alert("not working")
     }
    })
  }

  onEdit(data: videoModel){
    this.videoObj = data;
  }

  onUpdateVideo(){
    this.videoSrv.updateVideo(this.videoObj).subscribe((res: any) => {

      if (res.result) {
        alert("Data is Updated")
        // this will fetch the latest data after saing the video
        this.getVideos();

      } else {
        alert("not working, NOT Updated")
      }
    })
  }

  deleteVideo(id: number  ){
    console.log("result of console", id)
    const isDelete = confirm("are you sure you want to delete")
    // if user clicked ok button then its true 'confirm()' will show confimation message
   if(isDelete){
    console.log("ok button is clicked")
     this.videoSrv.deleteVideo(id).subscribe((res: any) => {

       if (res.result) {
         alert("Deleted Successfully")
         // this will fetch the latest data after saing the video
         this.getVideos();

       } else {
         alert(res.message)
       }
     })
   }
    
  }

  


  
}
