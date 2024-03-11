const warn = (msg: string, val: string) => console.warn(`[App Layout]:`, msg, val);

const validBreakpoints = ['sm', 'md', 'lg', 'xl'];

export function validateBreakpoint({ breakpoint }: { breakpoint: string }) {
	if (!validBreakpoints.some((b) => b === breakpoint))
		warn(
			"The `breakpoint` prop is not valid. It should be one of 'sm', 'md', 'lg' or 'xl' but is: ",
			breakpoint
		);
}
export function getBreakpoint() {
	const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 640;

	if (screenWidth <= 640) {
		return 'sm';
	} else if (screenWidth <= 768) {
		return 'md';
	} else if (screenWidth <= 1024) {
		return 'lg';
	} else return 'xl';
}
