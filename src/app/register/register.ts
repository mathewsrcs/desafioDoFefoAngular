import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
	nome = '';
  	usuario = '';
  	senha = '';
    senhaVisivel = false;
    tipoInputSenha = 'password';
    dadosFormRegister: any;

    registrar() {
        this.dadosFormRegister = {
            nome: this.nome,
            usuario: this.usuario,
      senha: this.senha
        };
    console.log(this.dadosFormRegister);
    }

    toggleVisibilidadeSenha() {
        this.senhaVisivel = !this.senhaVisivel;
        this.tipoInputSenha = this.senhaVisivel ? 'text' : 'password';
    }
}
