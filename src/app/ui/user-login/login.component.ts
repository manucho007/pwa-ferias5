import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  /// Social Login

    signInWithGoogle(): void {
      this.auth.googleLogin()
        .then(() => this.afterSignIn());
    }

    signInWithFacebook(): void {
      this.auth.facebookLogin()
        .then(() => this.afterSignIn());
    }

    signInWithTwitter(): void {
      this.auth.twitterLogin()
        .then(() => this.afterSignIn());
    }

    /// Anonymous Sign In

    signInAnonymously() {
      this.auth.anonymousLogin()
        .then(() => this.afterSignIn());
    }


    /// Shared

    private afterSignIn(): void {
      // Do after login stuff here, such router redirects, toast messages, etc.
      this.router.navigate(['/']);
    }

}
