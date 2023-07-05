import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RestapiService } from '../services/restapi.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

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

  passwordData: any;

  GetPasswords() {
    this.restapiService.GetPasswords().subscribe(responce => {
      this.passwordData = responce;
      console.log(this.passwordData);
    });
  }

  displayedColumns: string[] = ['id', 'category', 'app', 'userName', 'password', 'actions'];
}
