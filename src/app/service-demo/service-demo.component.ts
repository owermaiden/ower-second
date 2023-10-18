import { Component, OnInit } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  mentors: Mentor[] = [];

  constructor(private service: MentorService){}

  ngOnInit(): void {
    // this.mentors = this.service.mentors;// No delay
    this.service.fetchMentor$().subscribe({
      next: (data) => this.mentors = data,
      error: (error) => console.log(error), // fallback method
      complete: () => console.log("completed")
    }
    );
    console.log("mentors fetched")
  }


}
