import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import * as fromRemoteData from '@devexperts/remote-data-ts';

@Component({
	selector: 'remote-data-component[state]',
	templateUrl: './remote-data.component.html',
	styleUrls: ['./remote-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoteDataComponent<TError, TData> {
	@Input() initial: string | TemplateRef<unknown> = 'initial';
	@Input() pending: string | TemplateRef<unknown> = 'pending...';
	@Input() success: string | TemplateRef<fromRemoteData.RemoteSuccess<TData>> = 'success';
	@Input() failure: string | TemplateRef<fromRemoteData.RemoteFailure<TError>> = 'failed';

	@Input() state!: fromRemoteData.RemoteData<TError, TData>;

	isInitial = fromRemoteData.isInitial;
	isPending = fromRemoteData.isPending;
	isSuccess = fromRemoteData.isSuccess;
	isFailure = fromRemoteData.isFailure;

	isTemplate = <T>(inputProp: string | TemplateRef<T>): inputProp is TemplateRef<T> => inputProp instanceof TemplateRef;
}
