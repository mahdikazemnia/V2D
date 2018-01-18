class V2D {

    constructor() {

        this.precision = 30; // accuracy in floats

        if (arguments.length === 2) { // (0,0)
            this.x = arguments[0];
            this.y = arguments[1];
        } else if (Array.isArray(arguments[0])) { // ([0,0])
            this.x = arguments[0][0];
            this.y = arguments[0][1];
        } else { // ({x:0, y:0})
            this.x = arguments[0].x;
            this.y = arguments[0].y;
        }

    }

    /**
     * returns a cloned vector which won't affect this one
     * @returns {V2D}
     */
    clone() {
        return new V2D(this.x, this.y);
    }

    /**
     * precise's the given value
     * @returns {Number}
     */
    precise(num) {
        return num.toFixed(this.precision) / 1;
    }

    // ---------------------------
    //          + - * /
    // ---------------------------

    /**
     * adds the "von" to this vector (vector or Number)
     * @param {V2D | Number} von 
     */
    add(von) {
        this.x += von.x !== undefined ? von.x : von;
        this.y += von.y !== undefined ? von.y : von;
        return this;
    }

    /**
     * subtracts the "von" from this vector (vector or Number)
     * @param {V2D | Number} von 
     */
    subtract(von) {
        this.x -= von.x !== undefined ? von.x : von;
        this.y -= von.y !== undefined ? von.y : von;
        return this;
    }

    /**
     * multiplies this vector by "von" (vector or Number)
     * @param {V2D | Number} von 
     */
    multiply(von) {
        this.x *= von.x !== undefined ? von.x : von;
        this.y *= von.y !== undefined ? von.y : von;
        return this;
    }

    /**
     * divides this vector to "von" (vector or Number)
     * @param {V2D | Number} von 
     */
    divide(von) {
        this.x /= von.x !== undefined ? von.x : von;
        this.y /= von.y !== undefined ? von.y : von;
        return this;
    }


    // ---------------------------
    //          getters
    // ---------------------------

    /**
     * returns the length (magnitude) of vector
     * @return {Number}
     */
    get length() {
        let x = this.x;
        let y = this.y;
        return this.precise(Math.sqrt(x * x + y * y));
    }

    /**
     * returns the normalized clone of vector (length to 1)
     * @return {V2D}
     */
    get normalized() {
        let cloned = this.clone();
        return cloned.normalize(); // TODO: create this.normalize() method
    }

    /**
     * returns the angle of vector (degrees)
     * @return {Number}
     */
    get angle() {
        return this.precise(Math.atan2(this.x, this.y) * 180 / Math.PI);
    }

    /**
     * returns the angle of vector (radians)
     * @return {Number}
     */
    get angleRD() {
        return this.precise(Math.atan2(this.x, this.y));
    }

}