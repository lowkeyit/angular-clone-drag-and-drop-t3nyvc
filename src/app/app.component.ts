import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  origin = [
    {title: 'Text', type:'text'},
    {title: 'Number', type:'number'},
    {title: 'Dropdown', type:'select'},
    {title: 'Radio', type:'radio'},
    {title: 'Checkbox', type:'check'},
    {title: 'Date', type:'date'},
  ];

  destination = [
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let item:any = event.previousContainer.data[event.previousIndex];
      let copy:any = JSON.parse(JSON.stringify(item));
      let element:any = {};
      for(let attr in copy){
        if(attr == 'title'){
          element[attr] = copy[attr] += ' copy';
        }else{
          element[attr] = copy[attr];
        }
      }
      this.destination.splice(event.currentIndex,0, element);
    }
  }
}
