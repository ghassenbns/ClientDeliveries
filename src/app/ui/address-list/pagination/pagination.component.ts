import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnDestroy {
  private totalPagesSub : Subscription = Subscription.EMPTY;
  private activePageSub : Subscription = Subscription.EMPTY;
  
  totalPages : number = 1;
  activePage : number = 1;
  pagesNumbers : number[] = [];  

  constructor(private paginationService : PaginationService){}

  ngOnInit(): void {
    this.totalPagesSub = this.paginationService.totalPages.subscribe((total)=> {
      this.totalPages = total;
      this.pagesNumbers = Array.from(Array(total), (_, i) => i+1);      
    });
    this.activePageSub = this.paginationService.activePage.subscribe((active)=> this.activePage = active);
  }

  setPage(page : number){
    return this.paginationService.setActivePage(page);
  }

  ngOnDestroy(): void {
    this.totalPagesSub.unsubscribe();
    this.activePageSub.unsubscribe();
  }
}
