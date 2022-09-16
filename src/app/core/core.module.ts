import { NgModule, Optional, SkipSelf } from '@angular/core';

import { TeacherServiceService } from '../teacher-service.service';

@NgModule({
  providers: [TeacherServiceService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
