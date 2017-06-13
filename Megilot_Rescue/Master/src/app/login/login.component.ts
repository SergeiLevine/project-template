import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string = 'menu';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'

        this.returnUrl = this.route.snapshot.queryParams[''] || '/';
    }

    login() {
        this.loading = true;


        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate(['menu']);
            },
            error => {
                console.log('error');
                this.alertService.error(error._body);
                this.loading = false;
            });
    }
}
