import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vercorridas',
  templateUrl: './vercorridas.component.html',
  styleUrls: ['./vercorridas.component.css']
})
export class VercorridasComponent implements OnInit {

  //corridas: any;
 // data = {};
  constructor( private dataServices: DataService) { }

  ngOnInit() {
  // this.corridas = this.dataServices.getCorridas();
  //  this.dataServices.getCorridas()
  //  .subscribe( corridas => {
  //    console.log(corridas);
  //  })
  // this.dataServices.getCorridas()
  //       .subscribe(result => this.data = result);
         
}

}
