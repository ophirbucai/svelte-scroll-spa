let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'inView' : 'outOfView';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		}, {
			rootMargin: '10% 0px',
			threshold: [0.5]
		});
}

export default function viewport(element: HTMLElement) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}
