import { Component, OnInit } from '@angular/core';
import { BuscaUsuariosService } from 'src/app/busca-usuarios.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  // Queremos informações do servidor!
  usuarios: any[] = []

  constructor(private buscaUsuarios: BuscaUsuariosService) {
    // Requisições http aqui no componente? De jeito nenhum!
    // Vamos usar serviço de busca de usuários!
  }

  ngOnInit(): void {
    console.log("Inicializou o componente equipe!")

    this.buscaUsuarios.pegaTodos().subscribe((dados: any[]) => {
      this.usuarios = dados
    })
  }

}
