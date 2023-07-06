import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { DataService } from '../services/data.service';
import { IPassword } from '../interfaces/IPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.css']
})

export class PasswordsListComponent {

  hide = true;

  constructor(private router: Router, private restapiService: RestapiService, private dataService: DataService ) { }

  ngOnInit(): void { 
    this.GetPasswords();
  }

  passwords: IPassword[] = [];

  GetPasswords() {
    this.restapiService.GetPasswords().subscribe(data => {
      this.passwords = data;

      //decoding passwords
      this.passwords.forEach(element => {
        element.encryptedPassword = atob(element.encryptedPassword);
      }); 

      //console.log(this.passwords);
    });
  }

  EditPassword(id: number)
  {
    console.log(id);
    this.dataService.sendId(id);
    this.router.navigateByUrl('/edit-password');
  }

  DeletePassword(id: number)
  {
    console.log(id);
    this.restapiService.DeletePassword(id).subscribe(() => {
      this.passwords = this.passwords.filter(data => data.id !== id);
    });
  }

  displayedColumns: string[] = ['app'];
}
