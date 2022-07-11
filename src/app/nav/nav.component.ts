import { Component, OnInit } from '@angular/core';
import { WatchcountService } from '../watchcount.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  Counter:number=0
  constructor(private _watchCount:WatchcountService) {                                
    _watchCount.getCountCart().subscribe((res)=>{
      this.Counter=res
    })
  }

  ngOnInit(): void {
  }

}
