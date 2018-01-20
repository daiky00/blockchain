import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../shared/services/coins.service'
import { GridDataResult, PageChangeEvent, RowClassArgs } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State, process } from '@progress/kendo-data-query';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-grid-all-coins',
  templateUrl: './grid-all-coins.component.html',
  styleUrls: ['./grid-all-coins.component.scss']
})
export class GridAllCoinsComponent implements OnInit {

  gridView:  GridDataResult;
  sort: SortDescriptor[] = [{
    field: 'mktcap',
    dir: 'desc'
  }];
  gridState: State = {
    sort: this.sort,
    skip: 0,
    take: 100
  };


  constructor(private coinsService: CoinsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.buildCoinsData();
  }

  percentStatus(percent: number): SafeStyle {
    let result;
    if(percent > (0)) {
      return result = "#28a745"
    } if(percent < (0)) {
      return result = "#dc3545"
    }

    return this.sanitizer.bypassSecurityTrustStyle(result);
  }

  onStateChange(state: State) {
    this.gridState = state;
  }

  pageChange(event: PageChangeEvent): void {
    this.gridState.skip = event.skip;
    this.buildCoinsData();
  }
  
  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.buildCoinsData();
  }

  buildCoinsData() {
    this.coinsService.getAllCoins().subscribe((coins) => {

      this.gridView = {
        data: orderBy(coins.slice( this.gridState.skip, this.gridState.skip + this.gridState.take ),this.gridState.sort ),
        total: coins.length
      }; 
    })
  }

}
