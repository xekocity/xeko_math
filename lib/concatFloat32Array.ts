/**
 * Concat two float32 arrays
 * @param first the first array
 * @param second the second array
 * @returns a new array with the concatenation of the two arrays
 */
export default function concatFloat32Array(
	first: Float32Array,
	second: Float32Array,
): Float32Array {
	const firstLength = first.length,
		result = new Float32Array(firstLength + second.length);

	result.set(first);
	result.set(second, firstLength);

	return result;
}
