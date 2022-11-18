# angular-remote-data

A Higher-Order Component for Angular to declaratively render async data using [remote-data-ts](https://github.com/devexperts/remote-data-ts).
## Usage/Examples

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as remoteData from '@devexperts/remote-data-ts';
import { Observable, of } from 'rxjs';

type User = {
	name: string;
};

type State = {
	user: remoteData.RemoteData<'Fetching user failed', User>;
};

@Component({
	selector: 'remote-data-user',
	template: `
		<ng-container *ngIf="state | async as state">
			<remote-data-component
				[state]="state.user"
				initial="initial"
				pending="pending"
				success="success"
				failure="failure"
			>
				<ng-template #initial>not asked for a user yet</ng-template>
				<ng-template #pending>fetching user...</ng-template>
				<ng-template #success [remoteDataTypeOfSuccess]="state.user" let-user> Name: {{ user.name }} </ng-template>
				<ng-template #failure [remoteDataTypeOfFailure]="state.user" let-error> Error: {{ error }} </ng-template>
			</remote-data-component>
		</ng-container>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoteDataUserComponent {
	public state: Observable<State> = of({
		user: remoteData.success({ name: 'John Doe' })
	});
}

```

## Changelog

### 0.2.0
- add `remoteDataTypeOfSuccess` directive
    * implements `ngTemplateContextGuard` for `RemoteDataSuccess`. Allows type inference for Success-Templates.
- add `remoteDataTypeOfFailure` directive
    * implements `ngTemplateContextGuard` for `RemoteDataFailure`. Allows type inference for Failure-Templates.
