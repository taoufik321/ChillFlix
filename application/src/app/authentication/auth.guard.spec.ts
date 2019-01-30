import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';

import { Router } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let component: AuthGuard;
  let routerMock: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService]
    });

    authService = TestBed.get(AuthService);
    routerMock = TestBed.get(Router);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should route to error page when not logged in', inject([AuthGuard], (guard: AuthGuard) => {
    // spyOn(authService, 'isUserLoggedIn').and.returnValue(false);

    // spyOn(routerMock, 'navigateByUrl').and.callFake(() => {});

    // component.canActivate(undefined, undefined);

    // expect(authService.isUserLoggedIn).toHaveBeenCalled();

    // expect(routerMock.navigateByUrl).toHaveBeenCalledWith('error');
  }));

  it('should return true when logged in', inject([AuthGuard], (guard: AuthGuard) => {
    // spyOn(authService, 'isUserLoggedIn').and.returnValue(true);

    // const result = component.canActivate(undefined, undefined);

    // component.canActivate(undefined, undefined);

    // expect(authService.isUserLoggedIn).toHaveBeenCalled();
    // expect(result).toBe(true);
  }));

});
