/* eslint-disable */
// Type $store property in Vue component
// See: https://next.vuex.vuejs.org/guide/typescript-support.html#typing-store-property-in-vue-component
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  export interface State {
    passphrase: string;
    aircrafts: Aircraft[];
    aircraftStates: AircraftState[];
    flights: Flight[];
    tracks: Track[];
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
