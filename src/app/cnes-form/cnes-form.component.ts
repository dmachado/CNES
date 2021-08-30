import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../models/Estabelecimento';

@Component({
  selector: 'app-cnes-form',
  templateUrl: './cnes-form.component.html',
  styleUrls: ['./cnes-form.component.css']
})
export class CnesFormComponent implements OnInit {
  constructor() {}

  UFs = ['SP', 'RJ', 'MG', 'ES'];

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}
}
