import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdactService } from '../prodact.service';

@Component({
  selector: 'app-prodect-ditals',
  templateUrl: './prodect-ditals.component.html',
  styleUrls: ['./prodect-ditals.component.css']
})
export class ProdectDitalsComponent implements OnInit {
  constructor(private activeproduct:ActivatedRoute,private _productDetails:ProdactService) {

  }
  
  prudect:any={} ;
  id:any ;
  

  ngOnInit(): void {
    this.id=this.activeproduct.snapshot.paramMap.get('id')

    this._productDetails.getProuductDetalid(this.id).subscribe((res)=>{
      
      this.prudect=res
    })
    
    


  }
  ngOnDestroy() {
    this._productDetails.getProuductDetalid(this.id).subscribe()
  }

}
