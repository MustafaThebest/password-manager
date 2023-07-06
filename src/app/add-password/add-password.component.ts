import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})


export class AddPasswordComponent {
  
  constructor(private router: Router, private restapiService: RestapiService) {};
  
  hide = true;

  profileForm = new FormGroup({
    category: new FormControl(''),
    app: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  OnSubmit(){
    console.warn(this.profileForm.value);
    this.restapiService.AddPassword(this.profileForm.value).subscribe((result)=> { 
      console.warn(result);
      this.router.navigateByUrl('/passwords-list');
    })
  }
}
