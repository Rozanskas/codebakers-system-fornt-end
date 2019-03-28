import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { first } from 'rxjs/operators';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required]
    });
  
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
  
     
      this.registerService.register(this.f.username.value, this.f.password.value,this.f.name.value,this.f.email.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/login'], { queryParams: { message : data.message } });
          
          },
          error => {
            this.error = error;
           
          });
  
    }

}
