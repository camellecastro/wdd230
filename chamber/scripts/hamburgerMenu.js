// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
	const lazyLoadImages = document.querySelectorAll('.lazy-load');

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.src; // This triggers the browser to load the image
				img.classList.add('loaded');
				observer.unobserve(img);
			}
		});
	}, options);

	lazyLoadImages.forEach(image => {
		observer.observe(image);
	});
});
