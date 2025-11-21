import { Component, Input } from '@angular/core';
import { ApiResponse } from '../../interfaces/api-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-response-viewer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './response-viewer.component.html',
  styleUrls: ['./response-viewer.component.css']
})

export class ResponseViewerComponent {
  @Input() response?: ApiResponse;
}
