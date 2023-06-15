import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario = new Usuario();
  constructor(private service: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  crearUsuario(): void {
    this.service.createUsuario(this.usuario).subscribe({
      next: (res) => {        
        this.router.navigate(['listarUsuario']);
      },
      error: (e) => console.error(e)
    });
  }

}
