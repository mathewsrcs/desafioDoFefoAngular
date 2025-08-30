import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
	nome = '';
  	usuario = '';
  	senha = '';
    dadosFormRegister: any;

    registrar() {
        this.dadosFormRegister = {
            nome: this.nome,
            usuario: this.usuario,
            senha: this.senha
        };
        console.log(this.dadosFormRegister);
    }
}
