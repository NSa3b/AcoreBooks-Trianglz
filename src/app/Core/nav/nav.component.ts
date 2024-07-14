import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, MenuModule, MenubarModule,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Super Admin',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'admin@example.com',
            
          },
          {
            label: 'logout',
            route: '/login',
          },
        ],
      },
 
    ];
  }
}
