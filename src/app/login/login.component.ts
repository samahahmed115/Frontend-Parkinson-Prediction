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
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  onSubmit() {
    // إعادة تعيين الأخطاء
    this.emailError = !this.email;
    this.passwordError = !this.password;

    if (!this.emailError && !this.passwordError) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // يمكنك هنا إرسال البيانات إلى الخادم
    }
  }
}