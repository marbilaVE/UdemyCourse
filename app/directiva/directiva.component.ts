import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listaCurso:String[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  habilitar:boolean = true;

  setHabilitar() {

    this.habilitar = (this.habilitar==true)? false: true;
  }

  constructor() {}
  //ngOnInit(): void {}
}
