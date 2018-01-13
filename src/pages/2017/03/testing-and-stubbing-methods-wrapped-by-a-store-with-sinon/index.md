---
title: 'Testing and stubbing methods wrapped by a "store"'
date: '2017-10-03T21:09:00.000Z'
---

Maybe it's obvious and that's why I didn't find much about it in my searches, or my search criteria were off, or whatever, but it took me a while to figure it out. Then I keep forgetting and scratch my head for half an hour everytime, so I'm writing it down.

Here’s a simple class, <code class="language-js">MyStore</code>, that needs to do stuff when the <code class="language-js">document.readyState</code> is complete. The default export is wrapped in [AltJs createStore](http://alt.js.org/docs/createStore/).

<pre><code class="language-js">export MyStore {
	construct() {
		if (this.getDocumentReadyState() !== 'complete') {
			return;
		}

		this.userAgent = this.getUserAgent();
		// do all the things 🦋
	}

	getDocumentReadyState() {
        	return document.readyState;
	}

    ...
}

export default alt.createStore(MyStore, 'MyStore');
</code></pre>

## Testing

The first test here is to make sure nothing happens if the document isn't ready, so we need to stub <code class="language-js">getDocumentReadyState()</code>. But because the default export is wrapped in [AltJs](http://alt.js.org) we can’t get to the actual `MyStore` to stub the method.

Make sure <code class="language-js">MyStore</code> is exported as well as the default export, then in your test import `MyStore` (this is the wrapped one), and also import the unwrapped class.

<code class="language-js">import MyStore, {MyStore as UnwrappedMyStore} from '../../../src/stores/MyStore';</code>

You can then stub <code class="language-js">getDocumentReadyState</code> from the unwrapped class before firing the event that this store listens to; and make your assertion(s) as appropriate. I'm using [Sinon to stub the method](http://sinonjs.org/releases/v2.3.6/stubs/).

Don’t forget to use <code class="language-js">UnwrappedMyStore.prototype</code> to reference the class. [JS classes are just syntactic sugar](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) and add the methods to the prototype.

<pre><code class="language-js">documentReadyState = sinon.stub(
	UnwrappedMyStore.prototype,
	'getDocumentReadyState'
).returns('interactive');

// dispatch action

chai.expect(MyStore.getState().userAgent).to.be.undefined;
</code></pre>

[stackoverflow - stubbing-a-class-method-with-sinon-js](https://stackoverflow.com/questions/21072016/stubbing-a-class-method-with-sinon-js) helped me figure it out.
