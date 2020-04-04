/*
JS File for my blog
*/

var explanationButton = document.getElementsByClassName("explanation-button")

for ( i = 0; i < explanationButton.length; i++ ) {
	explanationButton[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var buttonWrapper = this.parentElement
		var contentWrapper = buttonWrapper.parentElement
		var content = contentWrapper.querySelector('div.content')

		if ( content.style.maxHeight ) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	})
}

var replaceButton = document.getElementsByClassName('replace-button')

for ( i = 0; i < replaceButton.length; i++ ) {
	replaceButton[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var buttonWrapper = this.parentElement
		var contentWrapper = buttonWrapper.parentElement
		var content = contentWrapper.querySelector('div.content')

		var replaceableContent = contentWrapper.querySelector('div.replaceable-content')

		if ( content.style.maxHeight ) {
			content.style.maxHeight = null;
			replaceableContent.style.maxHeight = replaceableContent.scrollHeight + "px";
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			replaceableContent.style.maxHeight = '0px';
		}
	})
}
