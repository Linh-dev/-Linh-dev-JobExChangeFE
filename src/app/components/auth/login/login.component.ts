import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }


  onSubmit() {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập với email:', this.username);
    console.log('Đăng nhập với mật khẩu:', this.password);
    // Thực hiện logic đăng nhập (gọi service, xác thực, v.v.)
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Đăng nhập thành công:', response);
      },
      (error) => {
        console.error('Đăng nhập thất bại:', error);
        this.errorMessage = 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.';
      }
    );
  }

}
