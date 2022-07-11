import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchcountService {
watchCountCart=new BehaviorSubject(0)
idCard:Array<number>=[]
setCartCount(count:number){
  this.watchCountCart.next(count)
  
}
setId(id:number){
this.idCard.push(id)
}
getCountCart(){
  return this.watchCountCart.asObservable()
}
getIdCard(){
  return this.idCard
}
constructor() { }
}
