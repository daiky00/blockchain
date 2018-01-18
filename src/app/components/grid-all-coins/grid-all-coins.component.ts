import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoinsService } from '../../shared/services/coins.service'
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid-all-coins',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './grid-all-coins.component.html',
  styleUrls: ['./grid-all-coins.component.scss']
})
export class GridAllCoinsComponent implements OnInit {

  public gridView: GridDataResult;
  public gridData: any[];
  public pageSize = 100;
  public skip = 0;
  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];


  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    this.buildCoinsData();
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
      console.log(coins);
      this.gridData = coins;
      this.gridView = {
        data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize), this.sort),
        total: this.gridData.length
      }; 
    })
  }

}
