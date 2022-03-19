import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

declare var funcion1:any;
declare var funcion2:any;
declare var funcion3:any;

@Component({
  selector: 'app-componenteformulario',
  templateUrl: './componenteformulario.component.html',
  styleUrls: ['./componenteformulario.component.css']
})
export class ComponenteformularioComponent implements OnInit {

  title="Aplicación Angular";

  onClick1(){
    funcion1();
  }
  onClick2(){
    funcion2();
  }
  onClick3(){
    funcion3();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
