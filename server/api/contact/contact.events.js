/**
 * Contact model events
 */

'use strict';

import {EventEmitter} from 'events';
import Contact from './contact.model';
var ContactEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ContactEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Contact.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ContactEvents.emit(event + ':' + doc._id, doc);
    ContactEvents.emit(event, doc);
  }
}

export default ContactEvents;
