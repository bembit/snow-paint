const snowContainer = document.getElementById('snow-container');

// SVG snowflake
// unused
const snowflakeSVG = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M12 0L13.09 6.26L19.39 3.76L16.5 10L22 12L16.5 14L19.39 20.24L13.09 17.74L12 24L10.91 17.74L4.61 20.24L7.5 14L2 12L7.5 10L4.61 3.76L10.91 6.26L12 0Z"/>
	</svg>
`;

function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');

	// create an SVG element dynamically to handle sizes later
	const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgElement.setAttribute("viewBox", "0 0 24 24");

	const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathElement.setAttribute("d", "M12 0L13.09 6.26L19.39 3.76L16.5 10L22 12L16.5 14L19.39 20.24L13.09 17.74L12 24L10.91 17.74L4.61 20.24L7.5 14L2 12L7.5 10L4.61 3.76L10.91 6.26L12 0Z");
	svgElement.appendChild(pathElement);

	snowflake.appendChild(svgElement);

	// random size
	const size = Math.random() * 20 + 10; // 10px to 30px
	snowflake.style.width = `${size}px`;
	snowflake.style.height = `${size}px`;

	// add blur based on size of snowflake
	// I don't know figure out math later for this one
	// const blurRadius = ( size * 2 ) / size; // eg 10px / 10 = 1px blur
	const blurRadius = ((size / 10) / 2); // eg 10px / 10 = 1px blur
	snowflake.style.filter = `blur(${blurRadius}px)`;

	// random X position to start from
	const position = Math.random() * 100; // 0% to 100%
	snowflake.style.left = `${position}%`;

	// animation durations
	const duration = Math.random() * 5 + 5; // between 5s to 10s -> so the illusion of motion is more natural
	snowflake.style.animationDuration = `${duration}s`;

	snowContainer.appendChild(snowflake);

	// remove the snowflake after it finishes animating
	setTimeout(() => snowflake.remove(), duration * 1000);
}

setInterval(createSnowflake, 150);
