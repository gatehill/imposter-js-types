import {stores} from "@imposter-js/types"

export function incrementCounter() {
    const store = stores.open('example')
    let counter = store.load<number>('counter') || 0
    store.save('counter', ++counter)
    return counter
}
