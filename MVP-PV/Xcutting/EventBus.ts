import {Event} from "typescript.events";

export class EventBus extends Event {
    private static eventBus: EventBus = null;

        private constructor() {
            super();
        }
        
        public static Instance(): EventBus {
            if (this.eventBus == null) {
                this.eventBus = new EventBus();
            }
            return this.eventBus
        }
}