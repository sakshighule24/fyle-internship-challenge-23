import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  username: string = '';

  constructor() { }

  searchUser() {
    this.search.emit(this.username);
  }
}
