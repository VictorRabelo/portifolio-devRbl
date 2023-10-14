import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  yearsProgramation?: number;
  yearBirth?: number;
  
  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    const dataAtual = new Date();
    
    this.yearsProgramation = dataAtual.getFullYear() - 2019;
    this.yearBirth = dataAtual.getFullYear() - 1999;
    
    this.title.setTitle('DevRbl | Sobre');
  }

}
