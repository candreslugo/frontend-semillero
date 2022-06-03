import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @Input() typeUser: string = 'typeUser';

  constructor() { }

  ngOnInit(): void {
  }

}
