import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { IPassword } from '../interfaces/IPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.css']
})

export class PasswordsListComponent {

  constructor(private router: Router, private restapiService: RestapiService) { }

  ngOnInit(): void { 
    this.GetPasswords();
  }

  passwords: IPassword[] = [];

  GetPasswords() {
    this.restapiService.GetPasswords().subscribe(data => {
      this.passwords = data;
      //console.log(this.passwords);
    });
  }

  EditPassword(id: number)
  {
    console.log(id);
    this.router.navigate(['/edit-password', id]);
  }

  DeletePassword(id: number)
  {
    console.log(id);
    this.restapiService.DeletePassword(id).subscribe(() => {
      this.passwords = this.passwords.filter(data => data.id !== id);
    });
  }

  displayedColumns: string[] = ['id', 'category', 'app', 'userName', 'password', 'actions'];
}
