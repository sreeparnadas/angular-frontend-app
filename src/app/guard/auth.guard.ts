import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  const loggedinUserObj = authService.getLoggedinUserObject()

  if(loggedinUserObj && loggedinUserObj.token && loggedinUserObj.token!=null){
    return true;
  }
  else{
    authService.userLoggedIn.next(false)
    router.navigateByUrl("/")
    return false;
  }
};
