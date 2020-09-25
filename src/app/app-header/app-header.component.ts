import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  pageName: string = '/';

  ngOnInit(): void {
  }

  getPageName() {
    this.pageName = this.router.url;
    console.log(this.pageName);
  }
}
