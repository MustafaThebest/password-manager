import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestapiService } from '../services/restapi.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { IPassword } from '../interfaces/IPassword'

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  hide = true;

  constructor(private router: Router, private restapiService: RestapiService, private dataService: DataService) { };

  id: number = 0;
  password: IPassword = {} as IPassword;

  profileForm: FormGroup = new FormGroup({
    category: new FormControl(this.password.category),
    app: new FormControl(this.password.app),
    userName: new FormControl(this.password.userName),
    password: new FormControl(this.password.encryptedPassword),
  });

  ngOnInit() {
    this.dataService.currentId.subscribe(id => {
      this.id = id;
    });
    this.restapiService.GetPassword(this.id).subscribe((data) => {
      this.password = data;

      this.profileForm.setValue({
        category: this.password.category,
        app: this.password.app,
        userName: this.password.userName,
        password: atob(this.password.encryptedPassword)
      })

    });
  }


  OnSubmit() {
    //SUBMIT CHANGES
    this.restapiService.PutPassword(this.password.id, this.profileForm.value).subscribe((result)=> { 
      console.warn(result);
      this.router.navigateByUrl('/passwords-list');
    })
  }
}
