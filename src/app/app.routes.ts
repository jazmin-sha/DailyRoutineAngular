import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path:'auth',
        loadChildren: ()=> import('../app/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'todo',
        loadChildren: () => import('../app/todo/todo.module').then(m => m.TodoModule)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes , { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
