import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // <-- تعريف المكون كـ standalone
  imports: [FormsModule, RouterModule, CommonModule], // <-- استيراد الوحدات النمطية
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // يمكنك هنا إضافة منطق إرسال البيانات إلى الخادم
    } else {
      alert('Please fill in all fields.');
    }
  }
}