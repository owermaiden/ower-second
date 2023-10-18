import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit{

  selectedMentor: Mentor | undefined;

  constructor(private service: MentorService, private router: Router){
    console.log('constructor of right');
  }

  ngOnInit(): void {
    // this.selectedMentor = this.service.selectedMentor;
    this.service.selectedMentor$.subscribe(
      data => this.selectedMentor = data
    );
    console.log('OnInit of right');
  }
  // Before view rendered

  onLikeMentor( liked: Mentor ){
    this.service.likeMentor(liked);
    this.router.navigate(['left']);
  }
}
