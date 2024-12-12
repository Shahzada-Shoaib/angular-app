import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetApiComponent } from './get-api/get-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'test-app';


 

  isDivVisible: boolean = true;

  buttonText: string = 'Hide';
  inputvalue: string = '';
  dayName:string = '';

  cityList: string[]=['Lahore','Karachi','Islamabad','Peshawar'];
  studentList :any[]=[
    {stuID:111, name:"AAA", mobile: 3300001, city: "Lahore", isActive: false},
    {stuID: 222, name: "BBB", mobile: 3300002, city: "Islamabad", isActive: false},
    {stuID: 333, name: "CCC", mobile: 3300003, city: "Peshawar", isActive: true},
    {stuID: 444, name: "CCC", mobile: 3300003, city: "Quetta", isActive: false},
    {stuID: 555, name: "CCC", mobile: 3300003, city: "Gujrat", isActive: true},
  ]


  showHideDiv(isShow: boolean){
  
    this.isDivVisible = isShow;

  }

  hideWithCssClass(){
    this.isDivVisible = !this.isDivVisible;
    if (this.isDivVisible == true) {
      this.buttonText = "Hide";
    } else {
      this.buttonText = "Show";
    }
    
  }


}
