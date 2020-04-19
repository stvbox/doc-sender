import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export class BaseComponent implements OnDestroy {
	unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

	ngOnDestroy(): void {
		this.unsubscribe.next(true);
		this.unsubscribe.complete();
	}

}
