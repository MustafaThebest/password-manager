import { Component } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { IPassword } from '../interfaces/IPassword';

@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.css']
})

export class PasswordsListComponent {

  constructor(private restapiService: RestapiService) { }

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

  DeletePassword(id: number)
  {
    console.log(id);
    this.restapiService.DeletePassword(id).subscribe(() => {
      this.passwords = this.passwords.filter(data => data.id !== id);
    });
  }

  displayedColumns: string[] = ['id', 'category', 'app', 'userName', 'password', 'actions'];
}
