import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
