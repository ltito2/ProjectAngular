import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://logowik.com/content/uploads/images/rarible5951.jpg";
  public titulo:string="Interpolacion";
  constructor() { }

  ngOnInit(): void {
  }

}
