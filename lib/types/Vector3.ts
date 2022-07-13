import Vector2 from './Vector2.ts';

type Vector3<T> = Vector2<T> & {
	z: T;
};
export default Vector2;
