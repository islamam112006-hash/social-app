import { Routes } from "@angular/router";
import { AuthComponent } from "./layout/auth/auth.component";
import { MainComponent } from "./layout/main/main.component";
import path from "path";


export const routes: Routes = [
    {path : '' , redirectTo : 'register' , pathMatch : 'full'},
{
    

    path: '', component: AuthComponent , children: [

    {path : 'login' , loadComponent : () => import('./core/auth/login/login.component').then(m => m.LoginComponent)},
    {path : 'register' , loadComponent : () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)},
    {path : 'forgot' , loadComponent : () => import('./core/auth/forget/forget.component').then(m => m.ForgetComponent)}
]},
{
    path:'' , component: MainComponent , children : [
        {path : 'feed' , loadComponent : () => import('./features/feed/feed.component').then(m => m.FeedComponent)},
        {path : 'profile' , loadComponent : () => import('./features/profile/profile.component').then(m => m.ProfileComponent)},
        {path : 'noti' , loadComponent : () => import('./features/noti/noti.component').then(m => m.NotiComponent)}
]},
  {
        path : '**' , loadComponent : () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];