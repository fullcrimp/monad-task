const SHIFT_LIST = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
]

module.exports = function canReach(startPos, finalPos, steps) {

  // no move implied
  if (!steps && equal(startPos, finalPos)) {
    return true
  }

  steps--

  for (let nextShiftNum = 0; nextShiftNum < SHIFT_LIST.length; nextShiftNum++) {
    let nextShift = SHIFT_LIST[nextShiftNum], // shims
        nextPos = [
          startPos[0] + nextShift[0],
          startPos[1] + nextShift[1]
        ]

    // impossible shift
    if (nextPos[0] < 0 || nextPos[0] > 8 || nextPos[1] < 0 || nextPos[1] > 8) {
      continue
    }

    // success condition
    if (steps === 0 && equal(nextPos, finalPos)) {
      return true
    }

    // recursive call
    if (steps > 0 && canReach(nextPos, finalPos, steps)) {
      return true
    }
  }
  return false
}

function equal(firstArr, secondArr) {
  return firstArr.every((element, i) => {
    return firstArr[i] === secondArr[i]
  })
}
