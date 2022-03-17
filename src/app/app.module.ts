import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import vi from '@angular/common/locales/vi';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, NZ_DATE_LOCALE, vi_VN } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { NzDemoDatePickerFormatComponent } from './app.component';

import viLocale from 'date-fns/locale/vi';

registerLocaleData(vi);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
  ],
  declarations: [NzDemoDatePickerFormatComponent],
  bootstrap: [NzDemoDatePickerFormatComponent],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_DATE_LOCALE, useValue: viLocale },
  ],
})
export class AppModule {}
