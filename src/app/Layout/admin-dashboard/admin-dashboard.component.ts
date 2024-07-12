import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from '../../Core/nav/nav.component';
import { SideNavComponent } from '../../Core/side-nav/side-nav.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet,NavComponent,SideNavComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
