import { Component, OnInit } from '@angular/core';
import { MozLayoutService } from 'ngx-moz-layouter';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss']
})
export class HomeTestComponent implements OnInit {

  constructor(public layout: MozLayoutService) { }

  ngOnInit() {
  }

}
