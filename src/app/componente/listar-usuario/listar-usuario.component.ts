import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  listaUsuario: Usuario[] = []
  usuario = new Usuario();

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.getAllUsuario();
  }

  crearUsuario(): void {
    this.service.createUsuario(this.usuario).subscribe({
      next: (res) => {        
        this.getAllUsuario();
        //this.router.navigate(['listarUsuario']);
      },
      error: (e) => console.error(e)
    });
  }

  getAllUsuario(): void {
    this.service.getAllUsuario()
      .subscribe(
        data => {
          this.listaUsuario = data
        },
        error => {
          console.log(error)
        }
      )
  }

  deleteUsuario(id: Number) {
    this.service.deleteUsuario(id)
      .subscribe(
        data => {
          this.service.getAllUsuario().subscribe(data => {
            this.listaUsuario = data
          })
        },
        error => console.log(error));
  }

}
