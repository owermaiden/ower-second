import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  
  mentors: Mentor[] = [];

  constructor(private service: MentorService, private router: Router){
    console.log('Constructor of left');
  }

  ngOnInit(): void {
    this.service.fetchMentor$();
    this.mentors = this.service.mentors;
    console.log('Oninit of left');
  }
  // Before This component rendered 

  onSelectMentor(mentor: Mentor){
    this.service.selectedMentor = mentor;
    this.router.navigate(['right']); // Localhos://4200/right
  }

}
