const Range = function* (start = 0, stop = 1, step = 0) {
	for (let i = 0; i < stop; yield start + i++ * step) {
		// pass
	}
};
export default Range;
