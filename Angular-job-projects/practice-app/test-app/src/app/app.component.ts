import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'test-app';


 

  isDivVisible: boolean = true;

  buttonText: string = 'Hide';
  inputvalue: string = '';
  dayName:string = '';

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
