import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-search',
  templateUrl: './drug-search.component.html',
  styleUrls: ['./drug-search.component.css']
})
export class DrugSearchComponent implements OnInit {

  showDropDown:boolean;
	displayddl:string;
	drugs : [{
        drugname: string,
        ndc : string,
        gpi : string,
        genericIndicator : string,
       
    }];
  constructor() { 
  	this.showDropDown = false;
  }

  ngOnInit() {
  }

  getResults() {
  	this.showDropDown = !this.showDropDown;
  	this.displayddl = this.showDropDown ? "block" : "none";
  	this.drugs = [{
            drugname : "ADVIL CONGESTION RELIEF 200MG-10MG TABLET",
            ndc: "00573019510",
            gpi : "43991002400320",
            genericIndicator: "Yes",
        },{
            drugname : "ADVIL CONGESTION RELIEF 200MG-10MG TABLET",
            ndc: "00573019510",
            gpi : "43991002400320",
            genericIndicator: "Yes",
        },{
            drugname : "ADVIL CONGESTION RELIEF 200MG-10MG TABLET",
            ndc: "00573019510",
            gpi : "43991002400320",
            genericIndicator: "-",
        }]

  }

}
