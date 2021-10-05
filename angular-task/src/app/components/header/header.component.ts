import { Component, OnInit } from '@angular/core';

// ng generate component components/header

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = 'Task Tracker';

  constructor() { }

  // lifecycle method - runs on component init
  ngOnInit(): void {
  }

  toggleAddTask() {
    alert('toggle')
  }

}
