import {Optional} from '../../util/ts/Optional';
import {LocalPrefs} from './LocalPrefs';

export class LifecycleToggle extends LocalPrefs {

    public static toggle(key: string, handler: () => void): void {

        const currentValue =
            Optional.of(window.localStorage.getItem(key)).getOrElse('false');

        if (currentValue === 'true') {
            return;
        }

        handler();

        this.mark(key);

    }

}
