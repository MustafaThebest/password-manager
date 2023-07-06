import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestapiService } from '../services/restapi.service';
import { ActivatedRoute } from '@angular/router';
import { IPassword } from '../interfaces/IPassword'

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  hide = true;

  constructor(private router: ActivatedRoute, private restapiService: RestapiService) { };

  id: number = 0;
  password: IPassword = {} as IPassword;

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.restapiService.GetPassword(this.id).subscribe((result) => {
      this.password = result; // Assign the result to the password variable
    });
  }

  profileForm = new FormGroup({
    category: new FormControl(this.password.category),
    app: new FormControl(this.password.app),
    userName: new FormControl(this.password.userName),
    password: new FormControl(atob(this.password.encryptedPassword)),
  });

  OnSubmit() {
    console.warn(this.profileForm.value);

    //SUBMIT CHANGES

    // this.restapiService.AddPassword(this.profileForm.value).subscribe((result)=> { 
    //   console.warn(result);
    //   this.router.navigateByUrl('/passwords-list');
    // })
  }
}
