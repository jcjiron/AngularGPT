import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuItemComponent } from '../../presentation/components/SidebarMenuItem/SidebarMenuItem.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule, RouterModule, SidebarMenuItemComponent],
  templateUrl: './DashboardLayout.component.html',
  styleUrl: './DashboardLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {

  public routes = routes[0].children?.filter((route) => route.data);

}
