import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
	usuario = '';
  	senha = '';
	dadosFormLogin: any;

	entrar() {
		this.dadosFormLogin = {
			usuario: this.usuario,
			senha: this.senha
		};
		console.log(this.dadosFormLogin);
	}
}
