import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  onSubmit() {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập với email:', this.username);
    console.log('Đăng nhập với mật khẩu:', this.password);
    // Thực hiện logic đăng nhập (gọi service, xác thực, v.v.)
  }

}
