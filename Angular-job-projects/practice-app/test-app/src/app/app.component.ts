import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'test-app';

 

  isDivVisible: boolean = true;

  buttonText = 'Hide';

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
