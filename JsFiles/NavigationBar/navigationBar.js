// Toggle for showing the dropdown menus

// post menu elements
const postMenu = document.getElementById("post-dropdown-content");
const postButton = document.getElementById("posts-button");

// random menu elements
const randomMenu = document.getElementById("random-dropdown-content");
const randomButton = document.getElementById("random-button");

// nav bar element
const navBar = document.getElementById("navBar");

// set width of menu based on nav bar width
postMenu.style.width = String(postButton.offsetWidth) + "px";
randomMenu.style.width = String(randomButton.offsetWidth) + "px";

// toggle element visibility
function showPostMenu () {
	postMenu.classList.toggle("show");
	navBar.classList.toggle("show-left-border-curve");

	if (randomMenu.classList.contains("show")) {
		randomMenu.classList.toggle("show");
	}
}

function showRandomMenu () {
	randomMenu.classList.toggle("show");

	if (postMenu.classList.contains("show")) {
		postMenu.classList.toggle("show");
		navBar.classList.toggle("show-left-border-curve");
	}
}

function openAbout () {
	window.open("https://gartunius.github.io/","_self");
	/*if (postMenu.classList.contains("show")) {
		postMenu.classList.toggle("show");
		navBar.classList.toggle("show-left-border-curve");
	}
	if (randomMenu.classList.contains("show")) {
		randomMenu.classList.toggle("show");
	}*/
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.nav-bar-button')) {
		var dropdowns = document.getElementsByClassName("dropdown-menu");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
				navBar.classList.remove("show-left-border-curve");
			}
		}
	}
}
