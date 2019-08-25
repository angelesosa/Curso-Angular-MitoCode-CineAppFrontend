import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/_service/genero.service';
import { Genero } from 'src/app/_model/genero';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  dataSource: MatTableDataSource<Genero>;
  displayedColumns: string[] = ['idGenero', 'nombre', 'acciones'];

  constructor(
    private generoService : GeneroService
  ) { }

  ngOnInit() {
    this.generoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });  
  }

}
