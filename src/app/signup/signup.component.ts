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

  usernameError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  confirmPasswordError: boolean = false;
  passwordMismatch: boolean = false;

  onSubmit() {
    // إعادة تعيين الأخطاء إلى `false` قبل بدء التحقق
    this.usernameError = this.username.trim() === '';
    this.emailError = this.email.trim() === '';
    this.passwordError = this.password.trim() === '';
    this.confirmPasswordError = this.confirmPassword.trim() === '';
    
    // التحقق من تطابق كلمتي المرور
    this.passwordMismatch = this.password !== this.confirmPassword && !this.confirmPasswordError;

    // إذا لم تكن هناك أخطاء، نقوم بإرسال البيانات
    if (!this.usernameError && !this.emailError && !this.passwordError && !this.confirmPasswordError && !this.passwordMismatch) {
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // هنا يمكنك إضافة منطق إرسال البيانات إلى السيرفر
    }
  }
}