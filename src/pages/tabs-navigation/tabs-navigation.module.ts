import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsNavigationPage } from './tabs-navigation';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    TabsNavigationPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsNavigationPage),
  ]
})
export class TabsNavigationPageModule {}
