import { Component, OnInit, Input } from '@angular/core';
import { ProdactService } from '../prodact.service';
import { WatchcountService } from '../watchcount.service';

@Component({
  selector: 'app-prodact',
  templateUrl: './prodact.component.html',
  styleUrls: ['./prodact.component.css']
})
export class ProdactComponent implements OnInit {
  @Input() item:any
  
  arr=[]
    counter:number=0
    // arrId:Array<number>=[]
    constructor(private _watshCount:WatchcountService,private _prodact:ProdactService) { 
      _watshCount.getCountCart().subscribe((res)=>{
  this.counter=res
      })
    
    }
    setCounter(e:any){
    //  this.arrId.push(this.item.id)
     
     this._watshCount.setCartCount(this.counter+1)
     this._watshCount.setId(this.item.id)
    //  console.log(e);
     
     e.target.disabled=true     
    }
  ngOnInit(): void {
    this._prodact.getProuduct().subscribe((res)=>{
      this.arr=res
    })
  }
  ngOnDestroy() {
    this._prodact.getProuduct().subscribe()
  }
}
