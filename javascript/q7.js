/*
* The with method is being replaced by the witdh property. This was cused by a naming collision.
* This is a fix example.
*
* It would be nice to have a constructor too
* */

class T {
  width() {
    return this._width
  }

  setWidth(w) {
    this._width = w
  }
}

