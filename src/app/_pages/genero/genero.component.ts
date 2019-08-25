import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/_service/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  constructor(
    private generoService : GeneroService
  ) { }

  ngOnInit() {
    this.generoService.listar().subscribe(data => {
      console.log(data);
    });  
  }

}
