declare module '*.png';
declare module '*.svg' {
	const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
