window.addEventListener("DOMContentLoaded", () => {
    const cogImages = ["img/g40.png", "img/g43.png", "img/g37.png"];
    const container = document.getElementById("cog-container");
    const n = 20; 
    const placed = []; // stores placed cogs {x, y, size}
	const padding = 50; // extra space between cogs
	
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.style.position = "absolute";

        // random size
        const size = 100 * (0.5 + Math.random());
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundSize = "contain";
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundPosition = "center";
        div.style.zIndex = "1000";

        div.style.backgroundImage = `url(${cogImages[Math.floor(Math.random() * cogImages.length)]})`;

		let tries = 0;
		let x, y;

		extraOffset = 100 + Math.random() * 1900;

		const minX = container.clientWidth * 0.05;
		const maxX = container.clientWidth * 0.95 - size;
		const minY = container.clientHeight * 0.1 + extraOffset;
		const maxY = container.clientHeight * 0.9 + extraOffset - size;

		do {
			x = minX + Math.random() * (maxX - minX);
			y = minY + Math.random() * (maxY - minY);
			tries++;
		} while (
			placed.some(c => 
				Math.abs(c.x - x) < (c.size + size)/2 + padding &&
				Math.abs(c.y - y) < (c.size + size)/2 + padding
			)
			&& tries < 100
		);
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        placed.push({x, y, size});

        container.appendChild(div);
    }
});
