import { Component, OnInit } from '@angular/core';
import { HeaderSevice } from './header-service.ts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerSerice: HeaderSevice) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerSerice.headerData.title;
  }

  get icon(): string {
    return this.headerSerice.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerSerice.headerData.routeUrl;
  }

}
