import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification-service';
interface UserType {
  name: string;
  code: number;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  spinner = false;
  routerPath: string;
  availableUserType: UserType[];
  constructor(
    private fb: FormBuilder,
    private api: Service,
    private url: UrlConfig,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.routerPath = router.url;
    this.availableUserType = [
      {name: 'normal', code: 0},
      {name: 'priority', code: 1}
    ];
  }
  /* Modal Action
  @param Ok modal has been closed
 */
public modalAction(action: string): void {
  if (action === 'Ok') {
    this.spinner = false;
    this.api.alertConfigDefaultValue();
  } else {
    this.spinner = false;
    this.api.alertConfigDefaultValue();
    this.router.navigate(['/member/login']);

  }
}
/*  Login form controls creation */
private createForm() {
  this.registerForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    userType: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
}

/*  Access to login form fields */
get login() { return this.registerForm.controls; }

/* on click of submit button
*/
public onClickSubmit() {
  this.submitted = true;
  if (this.registerForm.valid) {
    const postObject = {
      name: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      typeId: Number(this.registerForm.value.userType),
      emailId: this.registerForm.value.userEmail,
    };
    console.log(postObject);
        /* Api call*/
    this.api.postCall(this.url.urlConfig().userRegister, postObject, 'post').subscribe(data => {
          if (data.statusCode === 607) {
            this.router.navigate(['/member/login']);
            this.spinner = false;
          } else {
            this.api.alertConfig = this.api.modalConfig('Error', '${data.message}', true, [{ name: 'Ok' }]);
            this.spinner = false;
          }
        },
          error => {
            this.api.alertConfig = this.api.modalConfig('Error', 'failed', true, [{ name: 'Ok' }]);
            this.spinner = false;
          });
  }
  /*mock*/
//   this.api.getList(this.url.urlConfig().mockRegister).subscribe(data => {
// console.log(data);
// if (data.statusCode === 200) {
//          this.router.navigate(['/member/login']);
//         } else {
//            console.log('failed');
//          }
//      });
}



/* Oninit call */
ngOnInit() {
  /* Check whether login/not */
  this.notificationService.sendRoute( this.routerPath );
  // if (!this.common.validUser()) {
  //   this.router.navigate(['/']);
  // }
  this.spinner = true;
  /* Call the form creation while on component initiation */
  this.createForm();
  this.spinner = false;
}
}
