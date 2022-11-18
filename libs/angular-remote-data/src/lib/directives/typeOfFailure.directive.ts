import { Directive, Input } from '@angular/core';
import * as remoteData from '@devexperts/remote-data-ts';

type ImplicitContext<E> = { $implicit: E; [index: string]: unknown };

@Directive({
	selector: '[remoteDataTypeOfFailure]'
})
export class RemoteDataFailureContextDirective<E, A> {
	@Input()
	remoteDataTypeOfFailure!: remoteData.RemoteData<E, A>;

	static ngTemplateContextGuard<E, A>(
		dir: RemoteDataFailureContextDirective<E, A>,
		ctx: unknown
	): ctx is ImplicitContext<E> {
		return true;
	}
}
