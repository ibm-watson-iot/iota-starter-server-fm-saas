/**
 * Copyright 2016,2019 IBM Corp. All Rights Reserved.
 *
 * Licensed under the IBM License, a copy of which may be obtained at:
 *
 * https://github.com/ibm-watson-iot/iota-starter-server-fm-saas/blob/master/LICENSE
 *
 * You may not use this file except in compliance with the license.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CarStatusSummaryComponent } from './summary/car-status-summary.component';
import { CarListComponent } from './summary/car-list.component';
import { ChartItemComponent } from './summary/chart-item.component';
import { StatusMeterComponent } from './cards/status-meter.component';
import { StatusHistoryGrahpComponent } from './cards/status-hist-graph.component';
import { CarStatusComponent } from './car-status.component';
import { CarStatusPageComponent } from './car-status-page.component';
import { DriverBehaviorComponent } from './behaviors/driver-behavior.component';

import { carStatusRouting } from './car-status-page.routing';

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule, FormsModule,
    carStatusRouting
  ],
  declarations: [
    CarStatusSummaryComponent,
    CarListComponent,
    ChartItemComponent,
    StatusMeterComponent,
    StatusHistoryGrahpComponent,
    CarStatusComponent,
    CarStatusPageComponent,
    DriverBehaviorComponent
  ],
  exports: [
    CarStatusPageComponent
  ],
  // providers: [
  //   CarStatusDataService
  // ]
})
export class CarStatusPageModule { }
