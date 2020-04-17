
'use strict'

/**
 * Make the value -1 if less than 0 or 1 if more than 0.
 */
module.exports.sign = (value) => (parseFloat(value) < 0.0) ? -1.0 : 1.0;

/**
 * make a value be between the minimum and maximum
 */
module.exports.clamp = (value, minimum, maximum) =>
{
  let min = parseFloat(minimum);
  let max = parseFloat(maximum);
  let resut = parseFloat(value);
  if (min > max) 
  {
    let temp = min;
    min = max;
    max = temp;
  }

  if (resut < min) 
  {
    resut = min;
  }
  else if (resut > max) 
  {
    resut = max;
  }
  return resut;
}

// Maybe removing the result variable and using the value itself can be better
module.exports.clamp01 = (value) => 
{
  let num = parseFloat(value);
  let result = 0.0;
  if (num < 0.0) 
  {
    result = 0.0;
  }
  else if (num > 1.0) 
  {
    result = 1.0;
  }
  else 
  {
    result = num;
  }
  return result;
}

// I need to make the the VectorA and VectorB has x and y properties
module.exports.distance = (vectorA, vectorB) => 
{
  let x = vectorB.x - vectorA.x
  let y = vectorB.y - vectorA.y;
  let result = Math.sqrt((x * x) + (y * y));
  console.log("Distance from " + vectorA + " to " + vectorB + " is " + result)
  return result
}

// I need to make the the VectorA and VectorB has x and y properties
module.exports.squareDistance = (vectorA, vectorB) => 
{
  let x = vectorB.x - vectorA.x
  let y = vectorB.y - vectorA.y;
  let result = (x * x) + (y * y);
  console.log("Square Distance from " + vectorA + " to " + vectorB + " is " + result)
  return result;
}

// I need to make the the Vector has x and y properties
module.exports.magnitude = (vector) => 
{
  let x = vector.x;
  let y = vector.y;
  let result = Math.sqrt((x * x) + (y * y));
  console.log("Magnitude of " + vector + " is " + result);
  return result;
}

// I need to make the the Vector has x and y properties
module.exports.squareMagnitude = (vector) => 
{
  let x = vector.x;
  let y = vector.y;
  let result = (x * x) + (y * y);
  console.log("Square Magnitude of " + vector + " is " + result)
  return result;
}

// I need to make the the Vector has x and y properties
module.exports.limitMagnitude = (vector, magnitude) =>
{
  let length = this.magnitude(vector);
  let strInfo = "The Limit Magnitude of " + vector + " with limiter of " + magnitude + " and length of " + length;
  if (length > parseFloat(magnitude)) 
  {
    let limiter = magnitude / length;
    vector.x *= limiter;
    vector.y *= limiter;
    console.log(strInfo + " is " + vector);
    return vector;
  }
  else 
  {
    console.log(strInfo + " is " + vector);
    return vector;
  }
}

/**
 *  Perform Linear Interpolation between a and b
 *  given t value between 0 and 1, used Clamp01 to contain the t
 */
module.exports.lerp = (a, b, t) => parseFloat(a + (b - a) * this.clamp01(t));

/**
 * Lerp version unclamped
 */
module.exports.lerpUnclamped = (a, b, t) => parseFloat(a + (b - a) * t);

/**
 * Lerp Angle
 * Same as lerp, but making sure they wrap around 360 degrees
 */
module.exports.lerpAngle = (a, b, t) =>
{
  let num = this.repeat(parseFloat(b - a), 360);
  if (num > 180)
  {
    num -= 360;
  }
  return a + num * this.clamp01(t);
}

/**
 * Loops the value t between the length and 0. It will never goes beyond or below
 */
module.exports.repeat = (t, length) => this.clamp(t - Math.floor(t / length) * length, 0.0, length);

/**
 * I'm not sure if it will work properly for now.
 * Give a random number between the min and max.
 */
module.exports.randomRange = (min, max) =>  min + Math.random() / (1 / (max - min));

/**
 * If a number is soooo small (close to EPSILON)
 * It changes to 0.0;
 */
module.exports.sanitize = (value) =>
{
  if ((parseFloat(value) >= -Number.EPSILON) && 
      (parseFloat(value) <= -Number.EPSILON))
  {
		value = 0.0;
	}
	return value;
}

/**
 * This method computes the minimum values for x and y from vectorA and vectorB
 * and returns
 * I need to make the the VectorA and VectorB has x and y properties
 */
module.exports.min = (vectorA, vectorB) =>
{
	let dest;
	dest.x = Math.min(vectorA.x, vectorB.x);
	dest.y = Math.min(vectorA.y, vectorB.y);
	return dest;
}

/**
 * This method computes the maximum values of x and y from vectorA and vectorB
 * and returns
 * I need to make the the VectorA and VectorB has x and y properties
 */
module.exports.max = (vectorA, vectorB) =>
{
	let dest;
	dest.x = Math.max(vectorA.x, vectorB.x);
	dest.y = Math.max(vectorA.y, vectorB.y);
	return dest;
}

/**
 * Negates the x and y properties of a vectort
 * I need to make the the Vector has x and y properties
 */
module.exports.negate = (vector) =>
{
	let dest;
	dest.x = -vector.x;
	dest.y = -vector.y;
	return dest;
}

/**
 * Returns the inverse x and y properties of a vector
 * I need to make the the Vector has x and y properties
 */
module.exports.inverse = (vector) =>
{
	let dest;
	dest.x = 1.0 / vector.x;
	dest.y = 1.0 / vector.y;
	return dest;
}


/**
 * Normalizes the vector and return
 * I need to make the the Vector has x and y properties
 */
module.exports.normalize = (vector) =>
{
	let dest;
	let x = vector.x;
	let y = vector.y;
	let length = (x * x) + (y * y);
	if (length > 0) {
		length = 1.0 / sqrt(length);
		dest.x = vector.x * length;
		dest.y = vector.y * length;
	}
	return dest;
}

/**
 * Returns the angle in degrees between from and to.
 * I need to make the the VectorFrom and VectorTo has x and y properties
 */
module.exports.angle = (vectorFrom, vectorTo) =>
{
	return Math.acos(
    this.clamp(
      this.dot(
        this.normalize(vectorFrom),
        this.normalize(vectorTo)
      ),
      -1.0, 1.0
    )
  ) * 57.29578;
}

/**
 * Return the DOT Product of two vectors.
 * I need to make the the Vector has x and y properties
 */
module.exports.dot = (vectorLHS,vectorRHS) =>
{
	return vectorLHS.x * vectorRHS.x + vectorLHS.y * vectorRHS.y;
}
