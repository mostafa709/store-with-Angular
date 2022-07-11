import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ProdactService } from '../prodact.service';
import { WatchcountService } from '../watchcount.service';

@Component({
  selector: 'app-prodactlist',
  templateUrl: './prodactlist.component.html',
  styleUrls: ['./prodactlist.component.css']
})

export class ProdactlistComponent implements OnInit {

  arr:ProdactService[]=[]
constructor(private _productList:ProdactService){}
  ngOnInit(): void {
    this._productList.getProuduct().subscribe((res)=>{
      this.arr=res
      
    })
  }
  ngOnDestroy() {
    this._productList.getProuduct().subscribe()
  }

}
