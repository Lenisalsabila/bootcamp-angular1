import { Component, OnInit } from '@angular/core';
import {MasterService} from "../services/master.service";
import {Kategori} from "../model/kategori.model";


@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  list!:Kategori[]
  constructor(private mast: MasterService) { }

  ngOnInit(): void {
    this.mast.list().subscribe({
      next:hasil =>{
        this.list =hasil
      },
      error: err => {
        console.log(err)
      }, complete:()=>{

    }
      })
  }

  deleteCateg(category_id:number):void {
    this.mast.delete(category_id).subscribe(res => {
      this.list = this.list.filter(item => item.category_id !== category_id);
      console.log('Delete successfully')
    })
  }
}
