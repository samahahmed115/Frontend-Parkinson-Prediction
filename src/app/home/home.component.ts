import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    '/public/home1.jpg',
    '/public/home2.jpg',
    '/public/home3.jpg'
  ];
  currentIndex = 0;
public: any;

  constructor() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // تغيير الصورة كل 3 ثواني
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
