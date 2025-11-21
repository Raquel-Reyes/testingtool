import { Routes } from '@angular/router';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ResponseViewerComponent } from './components/response-viewer/response-viewer.component';

export const routes: Routes = [
    { path: '', component: RequestFormComponent },
    { path: '', component: ResponseViewerComponent},

];
