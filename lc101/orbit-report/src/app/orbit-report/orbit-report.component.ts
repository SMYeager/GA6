import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-report',
  templateUrl: './orbit-report.component.html',
  styleUrls: ['./orbit-report.component.css']
})
export class OrbitReportComponent implements OnInit {
@Input() satellites: Satellite[];

  constructor() {
    
   }

  ngOnInit() {
  }

}
