import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  logo: any = 'assets/imagem/logo 4.png'
  constructor() { }

  ngOnInit(): void {
  }

}
