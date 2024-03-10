const warn = (msg: string, val: string) => console.warn(`[App Layout]:`, msg, val);

const validBreakpoints = ['sm', 'md', 'lg', 'xl'];

export default function validateBreakpoint({ breakpoint }: { breakpoint: string }) {
	if (!validBreakpoints.some((b) => b === breakpoint))
		warn(
			"The `breakpoint` prop is not valid. It should be one of 'sm', 'md', 'lg' or 'xl' but is: ",
			breakpoint
		);
}
