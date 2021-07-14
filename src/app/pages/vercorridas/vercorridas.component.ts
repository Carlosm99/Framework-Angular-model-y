import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vercorridas',
  templateUrl: './vercorridas.component.html',
  styleUrls: ['./vercorridas.component.css']
})
export class VercorridasComponent implements OnInit {

   corridas: any;
  constructor( private dataServices: DataService) { }

  ngOnInit(): void {
    this.corridas = this.dataServices.getCorridas();
  }

}
