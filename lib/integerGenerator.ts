/**
 * Create an integer generator with a step multiplier.
 * @param stepMultiplier
 * @returns
 */
export default function integerGenerator(
	stepMultiplier = 1,
): NumberGenerator {
	let i = 0;
	return () => {
		return i++ * stepMultiplier;
	};
}
type NumberGenerator = () => number;
