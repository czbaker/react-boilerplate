import { observable, action } from 'mobx';

export class CounterStore {

    @observable counter = 0;

    @action
    increment() {
        this.counter++;
    }

    @action
    decrement() {
        this.counter--;
    }

    @action
    incByAmount(i: number) {
        this.counter = this.counter + i;
    }

    @action
    decByAmount(i: number) {
        this.counter = this.counter- i;
    }

}

export class NavStore {

    @observable activePage = '';

    @action
    setActive(name: string) {
        this.activePage = name
    }

}

