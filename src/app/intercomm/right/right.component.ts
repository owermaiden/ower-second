import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit{

  selectedMentor: Mentor | undefined;

  constructor(private service: MentorService){
    console.log('constructor of right');
  }

  ngOnInit(): void {
    this.selectedMentor = this.service.selectedMentor;
    console.log('OnInit of right');
  }
  // Before view rendered

  onLikeMentor( selected: Mentor ){

  }
}
