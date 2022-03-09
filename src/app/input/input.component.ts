import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Kategori} from "../model/kategori.model";
import {MasterService} from "../services/master.service";
import {ActivatedRoute, Router} from "@angular/router";
import {flatMap} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  formInput! : FormGroup;
  id! : number;

  constructor(private toastr: ToastrService,
              private formBuild: FormBuilder, private mast: MasterService,
              private router: Router, private route: ActivatedRoute) {
    this.formInput = this.formBuild.group( {
      'category_id' : [null],
      'department_id' : [null],
      'name' :new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'description' :new FormControl(null,[Validators.required, Validators.minLength(3)])
    });
  }
  blankspaces(control: FormControl):{[s:string]: boolean} |null
  {
    if (control.value != null && control.value.trim().length === 0 ){
      return {'blankspaces': true};
    }
    return null;
  }
  log(param:any):void{
    console.log(param)
  }

  ngOnInit(): void {
    this.route.params.subscribe(rute=>{
      this.id =rute['id'];
      if (this.id){
        this.mast.getDeptById(this.id).subscribe({
          next: value => {
            this.formInput.controls['category_id'].setValue(value.category_id)
            this.formInput.controls['department_id'].setValue(value.department_id)
            this.formInput.controls['name'].setValue(value.name)
            this.formInput.controls['description'].setValue(value.description)
          }
        })
      }
    })
  }

  simpan():void{
    console.log(this.formInput.controls);
    console.log(this.formInput.valid);
    if (this.formInput.valid){
      let data = <Kategori>{};
      data.category_id =this.formInput.controls['category_id'].value
      data.department_id =this.formInput.controls['department_id'].value
      data.name =this.formInput.controls['name'].value
      data.description =this.formInput.controls['description'].value
      if(this.id){
        data.category_id = this.id;
      }
      this.mast.saveCategory(data).subscribe({
        next:hasil =>{
          // alert('simpan berhasil')
          this.toastr.success(hasil.status, 'Simpan Berhasil');
          this.router.navigateByUrl('/update' + data.category_id);
        },
        error: err => {

          const pesan: any[] = err.error.status.arguments;
          console.log(pesan);
          let msg = '';
          for (let i = 0; i < pesan.length; i++) {
            if(pesan[i].code){
              msg += pesan[i].code + "\n"
            }

          }
          console.log(msg)
          this.toastr.error(msg, 'Error!',{
          })
        }
      });
    }else{
      this.toastr.error('Form Wajib Di LEngkapi!', 'Error')
    }
  }

  update():void{
    let data = <Kategori>{};
    data.category_id =this.formInput.controls['category_id'].value
    data.department_id =this.formInput.controls['department_id'].value
    data.name =this.formInput.controls['name'].value
    data.description =this.formInput.controls['description'].value
    if(this.id){
      data.category_id = this.id;
    }
    this.mast.updateCategory(data).subscribe({
      next:hasil =>{
        this.toastr.success(hasil.status, 'Simpan Berhasil')
        this.router.navigateByUrl('/list');
      },
      error: err => {
        console.log(err)
      }
    })
  }

}

