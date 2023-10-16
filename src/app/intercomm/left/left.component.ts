import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {


  mentors: Mentor[] = [];

  constructor(private service: MentorService){}

  ngOnInit(): void {
    this.mentors = this.service.mentors;
  }

  onSelectMentor(mentor: Mentor){
    console.log(mentor);
  }

}
