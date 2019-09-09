import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
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

  constructor(private service: ServiceService, injector: Injector, private http: HttpClient) { }

  ngOnInit() {
  }

  contactClickEvent(name: string, family: string, email: string, phone: string, hodaaLakoach: string ) {
   this.service.sendEmail(name, family, email, phone, hodaaLakoach);
  }
}
