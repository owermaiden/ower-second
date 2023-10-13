import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentor } from 'src/app/shared/mentor';
import { Location } from '@angular/common';

@Component({
  selector: 'z2',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  selected: Mentor | undefined;
  mentors: Mentor[] = [
    new Mentor(1,'Ower', 12),
    new Mentor(2,'Sahin', 23),
    new Mentor(3,'Matt', 4)
  ];

  constructor(private route: ActivatedRoute, private location: Location){}  // Contructor body should be empty


  ngOnInit(): void {
    let index= Number(this.route.snapshot.paramMap.get('id'));
    this.selected = this.mentors[index - 1];
  }

  goBack(){
    this.location.back();
  }

  ngOnDestroy(): void {
    console.log('Ondestroy Called');
  }
}
