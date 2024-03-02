/** @typedef {typeof __propDef.props}  CountdownProps */
/** @typedef {typeof __propDef.events}  CountdownEvents */
/** @typedef {typeof __propDef.slots}  CountdownSlots */
export default class Countdown extends SvelteComponent<{
    targetDate: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountdownProps = typeof __propDef.props;
export type CountdownEvents = typeof __propDef.events;
export type CountdownSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        targetDate: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
