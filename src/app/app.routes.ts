import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PredictionComponent } from './prediction/prediction.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    { path: '', component: HomeComponent }, // مسار افتراضي لصفحة Home
    { path: 'Home',
     component: HomeComponent }, // مسار إضافي لصفحة Home
    {path:'Prediction',
        component: PredictionComponent
    },
   
    { path: 'Login',
        component: LoginComponent
    },
    {path: 'Signup',
        component: SignupComponent
    },
    {path:'About',
        component: AboutComponent
    },
    {path: 'contact',
        component:ContactComponent
    }
];
