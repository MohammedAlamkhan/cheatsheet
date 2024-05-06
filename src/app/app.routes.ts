import { Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NestComponent } from './nest/nest.component';
import { AngularComponent } from './angular/angular.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'html',
        component: HtmlComponent,
    },
    {
        path: 'css',
        component: CssComponent,
    },
    {
        path: 'javascript',
        component: JavascriptComponent,
    },
    {
        path: 'typescript/:id',
        component: TypescriptComponent,
    },
    {
        path: 'mongodb',
        component: MongodbComponent,
    },
    {
        path: 'nest',
        component: NestComponent,
    },
    {
        path: 'angular',
        component: AngularComponent,
    },
];
