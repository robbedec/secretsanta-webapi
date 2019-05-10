import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { OverviewComponent } from "./overview/overview.component";
import { MaterialModule } from "../../material/material.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ProfileComponent, OverviewComponent],
  imports: [CommonModule, MaterialModule, ProfileRoutingModule, TranslateModule]
})
export class ProfileModule {}
