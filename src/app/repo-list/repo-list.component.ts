import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html'
})
export class RepoListComponent implements OnInit {
  @Input() repos: any[]=[];
  currentPage: number = 1;
  reposPerPage: number = 10;
  paginatedRepos: any[]=[];

  constructor() { }

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.reposPerPage;
    const endIndex = startIndex + this.reposPerPage;
    this.paginatedRepos = this.repos.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.repos.length / this.reposPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }
}
