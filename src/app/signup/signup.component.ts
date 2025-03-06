import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- استيراد FormsModule
import { RouterModule } from '@angular/router'; // <-- استيراد RouterModule
import { CommonModule } from '@angular/common'; // <-- استيراد CommonModule

@Component({
  selector: 'app-signup',
  standalone: true, // <-- تعريف المكون كـ standalone
  imports: [FormsModule, RouterModule, CommonModule], // <-- استيراد الوحدات النمطية
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (this.username && this.email && this.password) {
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // يمكنك هنا إضافة منطق إرسال البيانات إلى الخادم
    } else {
      alert('Please fill in all fields.');
    }
  }
}
