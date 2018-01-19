import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../shared/services/coins.service'
import { GridDataResult, PageChangeEvent, RowClassArgs } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-grid-all-coins',
  templateUrl: './grid-all-coins.component.html',
  styleUrls: ['./grid-all-coins.component.scss']
})
export class GridAllCoinsComponent implements OnInit {

  public gridView: GridDataResult;
  public gridData: any[];
  public pageSize = 100;
  public skip = 0;
  public sort: SortDescriptor[] = [{
    field: 'mktcap',
    dir: 'desc'
  }];


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

  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.buildCoinsData();
  }
  
  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.buildCoinsData();
  }

  buildCoinsData() {
    this.coinsService.getAllCoins().subscribe((coins) => {
      this.gridData = coins;
      this.gridView = {
        data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
        total: this.gridData.length
      }; 
    })
  }

}
