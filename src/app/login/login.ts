import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
	usuario = '';
  	senha = '';
    senhaVisivel = false;
    tipoInputSenha = 'password';
	dadosFormLogin: any;

	entrar() {
		this.dadosFormLogin = {
			usuario: this.usuario,
			senha: this.senha
		};
		console.log(this.dadosFormLogin);
	}
    toggleVisibilidadeSenha() {
        this.senhaVisivel = !this.senhaVisivel;
        this.tipoInputSenha = this.senhaVisivel ? 'text' : 'password';
    }
}
