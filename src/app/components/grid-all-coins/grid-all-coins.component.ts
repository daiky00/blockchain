import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../shared/services/coins.service'
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

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


  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    this.buildCoinsData();
  }

  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.buildCoinsData();
  }

  buildCoinsData() {
    this.coinsService.getAllCoins().subscribe((coins) => {
      console.log(coins);
      this.gridData = coins;
      this.gridView = {
        data: this.gridData.slice(this.skip, this.skip + this.pageSize),
        total: this.gridData.length
      }; 
    })
  }

}
