npm install -g @angular/cli
ng new project-name
ng serve
ng generate component footer

Q) How to Create Standalone Components in Angular 17
ng generate component <component-name> --standalone

Ref: https://youtu.be/c8YGsPx0zVk?si=VgW8PYRMSFfyJ0hT
https://youtu.be/_7kbgMu8XbI?si=7oSM4q0sNgzsJBrv


Q) Where will you store project images?
Put images in public folder. https://stackoverflow.com/a/78637673/26549614



demo site
https://www.phpscriptsonline.com/product/exam-management/

mat-icons
https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/

Q) Custom-side-nav guide Ref: [https://www.youtube.com/watch?v=cz3pQQ5owd0&t=44s, https://www.youtube.com/watch?v=Sq5tdKKBz7Q]


Q) How to resolve cors issue?

https://stackoverflow.com/a/53183927
https://expressjs.com/en/resources/middleware/cors.html


Q) Class & Interfaces

Creating variable to bind form: Class
Creating a variable to hold array: Interface

https://www.youtube.com/watch?v=qMPFtq_DPck


Q) Reference for angular table and others
https://github.com/williamvn/UserManagement


Q) Angular ViewChild() decorator
https://youtu.be/tPYGJM1-qkk?feature=shared


Q) How to create grid?

<mat-grid-list cols="4" rowHeight="25px" style="padding-bottom: 4px;">
  <mat-grid-tile colspan="3" rowspan="1">
    <h2>Student List</h2>
  </mat-grid-tile>
  <mat-grid-tile colspan="1" rowspan="1">
    <mat-icon>person_add</mat-icon>
  </mat-grid-tile>
</mat-grid-list>



Q) Angular material flex layout
https://tburleson-layouts-demos.firebaseapp.com/#/docs


Q) CommonModule:

Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on. Re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.


Q) provideHttpClient() add it into appConfig

Q) https://github.com/primefaces/primeng/issues/14028#issuecomment-2267318272
p-toast error


Q) prime ng
https://primeng.org/confirmpopup

Q) Auth guard => ng g g auth
guard(CanActivate, CanActivateChild, CanDeactivate, CanMatch)