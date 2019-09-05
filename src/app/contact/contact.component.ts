import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    emailFC: new FormControl('', [Validators.required,
      Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    hodaa: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }
}
