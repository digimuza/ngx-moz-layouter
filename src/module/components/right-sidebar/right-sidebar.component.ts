import { Component, OnInit } from '@angular/core';
import {MozLayoutService} from '../../moz-layout.service';

@Component({
  selector: 'ngx-moz-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor(public layout: MozLayoutService) { }

  ngOnInit() {
  }

}
