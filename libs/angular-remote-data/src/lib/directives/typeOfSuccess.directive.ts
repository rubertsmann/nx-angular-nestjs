import { Directive, Input } from '@angular/core';
import * as remoteData from '@devexperts/remote-data-ts';

type ImplicitContext<A> = { $implicit: A; [index: string]: unknown };

@Directive({
	selector: '[remoteDataTypeOfSuccess]'
})
export class RemoteDataSuccessContextDirective<E, A> {
	@Input()
	remoteDataTypeOfSuccess!: remoteData.RemoteData<E, A>;

	static ngTemplateContextGuard<E, A>(
		dir: RemoteDataSuccessContextDirective<E, A>,
		ctx: unknown
	): ctx is ImplicitContext<A> {
		return true;
	}
}
