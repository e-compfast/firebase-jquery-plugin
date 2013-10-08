firebase-jquery-plugin
======================

A jQuery plugin that constructs [Firebase references](https://www.firebase.com/docs/javascript/firebase/new-firebase.html) based on hierarchical `data-firebase` DOM attributes.


## Basic Example

```html
<div id="#example1" data-firebase="https://firebase-jquery-plugin.firebaseio.com/"></div>
```

```javascript
var firebase = $('#example1').firebase();
// same as:
// firebase = new Firebase("https://firebase-jquery-plugin.firebaseio.com/");
```

## Hierarchy Example

```html
<body data-firebase="https://firebase-jquery-plugin.firebaseio.com/">
	<div data-firebase="test">
		<button data-firebase="data">Click Me</button>
	</div>
</body>
```

```javascript
$('button').on('click', function() {
	var firebase = $(this).firebase(); // new Firebase("https://firebase-jquery-plugin.firebaseio.com/test/data");
});
```

## Shorthands

```html
<body data-firebase="https://firebase-jquery-plugin.firebaseio.com/">
	<div>
		<strong id="user" data-firebase="user"></strong>
	</div>
</body>
```

```javascript
var firebase = $('#user').firebase(); // new Firebase("https://firebase-jquery-plugin.firebaseio.com/user");
firebase.on('value', function(snapshot) {
	$('#user').html(snapshot.val());
});
```

If no value is provided for the `data-firebase` attribute, the ID will be used. The `#user` line above could be simplified to:

```html
<body data-firebase="https://firebase-jquery-plugin.firebaseio.com/">
	<div>
		<strong id="user" data-firebase></strong>
	</div>
</body>
```


## firebase-value

Updating the DOM with a value from Firebase is so common that there's also a `data-firebase-value` attribute that will automatically do exactly that. The above could be further simplified to:

```html
<body data-firebase="https://firebase-jquery-plugin.firebaseio.com/">
	<div>
		<strong id="user" data-firebase-value></strong>
	</div>
</body>
```

Which would accomplish the same thing as the JavaScript above, without needing to manually write any JavaScript.


## More Examples

See the `example` directory for an example that sets a Firebase reference with form values.


## About

by Erik Beeson; MIT License. Feedback appreciated. Check out my other Firebase projects on github. Find me in #firebase on freenode or firebase-talk@googlegroups.com
