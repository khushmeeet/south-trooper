/**
 * Quote model events
 */

'use strict';

import {EventEmitter} from 'events';
import Quote from './quote.model';
var QuoteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
QuoteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Quote.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    QuoteEvents.emit(event + ':' + doc._id, doc);
    QuoteEvents.emit(event, doc);
  }
}

export default QuoteEvents;
