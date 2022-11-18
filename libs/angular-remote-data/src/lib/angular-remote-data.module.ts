import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemoteDataComponent } from './components/remote-data/remote-data.component';
import { RemoteDataFailureContextDirective } from './directives/typeOfFailure.directive';
import { RemoteDataSuccessContextDirective } from './directives/typeOfSuccess.directive';

@NgModule({
	imports: [CommonModule],
	exports: [RemoteDataComponent, RemoteDataSuccessContextDirective, RemoteDataFailureContextDirective],
	declarations: [RemoteDataComponent, RemoteDataSuccessContextDirective, RemoteDataFailureContextDirective]
})
export class AngularRemoteDataModule {}
