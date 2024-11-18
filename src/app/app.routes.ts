import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ExamManagementComponent } from './exam-management/exam-management.component';
import { ManageQuestionBankComponent } from './manage-question-bank/manage-question-bank.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { ResultComponent } from './result/result.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'student-details',
                component: StudentDetailsComponent,
                canActivate: [authGuard]
            },
            {
                path: 'course-management',
                component: CourseManagementComponent
            },
            {
                path: 'subject-list',
                component: SubjectListComponent
            },
            {
                path: 'exam-management',
                component: ExamManagementComponent
            },
            {
                path: 'manage-question-bank',
                component: ManageQuestionBankComponent
            },
            {
                path: 'online-test',
                component: OnlineTestComponent
            },
            {
                path: 'result',
                component: ResultComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            
        ],
        canActivate: [authGuard]
    },
    
];
