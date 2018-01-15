import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {
	showDropDown:boolean;
	displayddl:string;
	members : [{
        memberid: string,
        fullname : string,
        dob : string,
        gender : string,
        hicn : string,
        carrier : string,
        account : string,
        group : string,
        loe : string
    }];
  constructor() { 
  	this.showDropDown = false;
  }

  ngOnInit() {
  }

  getResults() {
  	this.showDropDown = !this.showDropDown;
  	this.displayddl = this.showDropDown ? "block" : "none";
  	this.members = [{
            memberid : "SR123333211921",
            fullname: " Smith, John",
            dob : "01/01/1981",
            gender: "Male",
            hicn:"HC8403840312",
            carrier:"1780",
            account:"00002044994",
            group:"000797319",
            loe:"01/01/2017 - 12/31/2018"

        }]

  }

}
