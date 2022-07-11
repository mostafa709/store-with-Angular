import { Component, OnInit } from '@angular/core';
import { throttle } from 'rxjs';
import { ProdactService } from '../prodact.service';
import { Product } from '../product';
import { WatchcountService } from '../watchcount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public arrId: Array<number> = [];
  // uniq = [...new Set(this.arrId)];

  items: Product[] = [];
  notfound: boolean = false;
  // count: number = 0;
  oneCardPrice: number = 0;
  totlePrice = 0;

  constructor(
    private _watchId: WatchcountService,
    private _prodact: ProdactService
  ) {
    _watchId.getCountCart().subscribe((res) => {
      if (res == 0) {
        this.notfound = true;
      }
    });

    this.arrId = this._watchId.getIdCard();

    // })
  }

  ngOnInit(): void {
    for (let i = 0; i < this.arrId.length; i++) {
      this._prodact
        .getProuductDetalid(this.arrId[i])
        .subscribe((res: Product) => {
          res.count = 0;
          // res.totlePrice=res.price*res.count
          this.items.push(res);
        });
    }
  }
  remove(index:number,id:number){

 this.totlePrice= this.decrementtotle(id)
 this._watchId.setCartCount(this.decrementtotalCount(id))
    this.items.splice(index, 1);
  }
  totalCount(){
    let count=0
    for (let i = 0; i < this.items.length; i++) {
      count =count+ this.items[i].count
      
    }
    return count
  }

  increment(id: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        this.items[i].count++;
        // console.log(this.items[i].totlePrice);
        this.items[i].totlePrice = this.items[i].price * this.items[i].count;
      }
      if (this.items[i].totlePrice) this.totlePrice = +this.items[i].totlePrice;
      else this.items[i].totlePrice = 0;
    }
    this.totlePrice=this.totleSumPrice()
    this._watchId.setCartCount(this.totalCount())

    
  }
  decrement(id: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        if (this.items[i].count > 0) this.items[i].count--;
        else this.items[i].count;
        this.items[i].totlePrice = this.items[i].price * this.items[i].count;
      }
    }
    this.totlePrice=this.totleSumPrice()
    this._watchId.setCartCount(this.totalCount())


  }
  totleSumPrice() {
    let totale=0
    for (let i = 0, y=i+1; i < this.items.length; i++,y++) {
      if (this.items[i].totlePrice) totale =totale+ this.items[i].totlePrice
      else this.items[i].totlePrice = 0;
      // console.log(totale,i);
      
    }
    return totale
  }
 decrementtotle(id:number) {
   let totale= this.totleSumPrice()
    for (let i = 0; i < this.items.length; i++ ){
      if (this.items[i].id==id) totale =totale- this.items[i].totlePrice
      // console.log(totale,i);
      
    }
    return totale
  }
  
 decrementtotalCount(id:number){
    let count=this.totalCount()
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].id==id){

        count =count- this.items[i].count
      }
      
    }
    return count
  }
  // ngOnDestroy() {
  //   this.arrId=[]
  // }
}
