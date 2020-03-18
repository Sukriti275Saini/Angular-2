import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../../myservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css','../add-user/add-user.component.css']
})

export class EditUserComponent implements OnInit {

  editUser;

  constructor(
    private editService: MyservicesService,
    private route: ActivatedRoute
  ,private router:Router,
    private eform : FormBuilder) { }

  userId: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });

    this.editUser = this.eform.group({
      id: this.newId,
      fname: this.newfname,
      lname: this.newlname,
      dob: this.newdob,
      email: this.newemail,
      mobileno: this.newmobileno,
      designation: this.newdesignation,
      address: this.newaddress,
    });

    this.editService.getOne(this.userId).subscribe(res=> {this.editUser.setValue(res)});
  }

  delete(uId: number) {
    this.editService.deleteOne(uId).subscribe();
    window.alert('User Deleted');
    this.router.navigate(['/']);
  }

  onSubmit(data){
    console.log(data);
    this.editService.editOne(this.userId, data).subscribe(()=> alert("User Details Updated"));
    setTimeout(()=>{
      this.router.navigate(['']);
    },1000);
  }

  newId= new FormControl('',[Validators.required, Validators.pattern("[0-9]{3,9}")]);
  newfname= new FormControl('',Validators.required);
  newlname= new FormControl('',Validators.required);
  newdob= new FormControl('',Validators.required);
  newemail= new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9._]{2,25}[@][a-z0-9]{4,20}[.][a-z]{2,5}")]);
  newmobileno= new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
  newdesignation= new FormControl('',Validators.required);
  newaddress= new FormControl('',Validators.required);

}
