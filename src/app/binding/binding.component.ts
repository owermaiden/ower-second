import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  title: string = 'This is coming from TS file';
  age: number = 12;
  isDisabled: boolean = false;

  onClick(event: Event):void{
    console.log(event);
    this.title = 'Title changed with button click';
    this.isDisabled = true;
  }

  onHover():void{
    console.log("Hovered");
    // alert("Hello"); 
  }

  // ---------------------------

  sentence: string = 'some string';

  onSubmit(value: string){
    console.log(value);
    this.sentence = value;
  }

  // -------------------------------

  anyString: string = '';

  // -------------------------------
  takeElement(ref: HTMLElement){
    console.log(ref.innerHTML);

  }

  @ViewChild('ref') ref? : ElementRef;

  someMethod(){
    console.log(this.ref);
  }


}
