import { Routes } from '@angular/router';
import { GetApiComponent } from './get-api/get-api.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
    {
        path: 'get-api',
         component: GetApiComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    }

];
