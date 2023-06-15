import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clase/usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  listaUsuario: Usuario[] = []

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.getAllUsuario();
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
