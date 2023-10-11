import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  mentor: Mentor | undefined;
  mentorId: number | undefined;

  constructor(private route: ActivatedRoute){

    let index= Number(this.route.snapshot.paramMap.get('id'));
    this.mentorId = index;
  }
}
