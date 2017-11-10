/****************************************************************************/
/*                       VERSION FOR SLOWPOKES AS ME                        */
/****************************************************************************/

// module.exports = function canReach(startPos, finalPos, steps) {

//   let posArr = [startPos]

//   while (steps--) {
//     posArr = cleanFromForbiddenMoves(getNextPosArr(posArr))
//   }
//   return posArr.some(function (pos) {
//     return equal(pos, finalPos)
//   })
// }

// function equal(firstArr, secondArr) {
//   return firstArr.every(function (element, i) {
//     return firstArr[i] === secondArr[i]
//   })
// }

// function getNextPosArr(posArr) {
//   const moves = [
//     [2, 1], [2, -1], [-2, 1], [-2, -1],
//     [1, 2], [1, -2], [-1, 2], [-1, -2]
//   ]
//   let posArrOfArr = posArr.map(function (pos) {
//     return moves.map(function (shift) {
//       return [pos[0] + shift[0], pos[1] + shift[1]]
//     })
//   })
//   return [].concat(...posArrOfArr)
// }

// function cleanFromForbiddenMoves(posArr) {
//   return posArr.filter(function (pos) {
//     return pos[0] > 0 && pos[0] < 9 && pos[1] > 0 && pos[1] < 9
//   })
// }


/****************************************************************************/
/*             FCKNG AWESOME VERSION FOR REALLY COOL DEVELOPERS             */
/****************************************************************************/

let equal = (firstArr, secondArr) => firstArr.every((element, i) => firstArr[i] === secondArr[i])
let getNextPosArr = (posArr) => posArr.reduce((result, pos) => {
  let shiftCombinations = [1, 2, -1, -2].reduce((acc, val1, i, arr) => [...acc, ...(arr.filter((val2, j) => i !== j && Math.abs(val2) !== Math.abs(val1) ).map(val3 => [val1, val3]))], [])
  return [...result, ...shiftCombinations.map((shift) => [pos[0] + shift[0], pos[1] + shift[1]])]
}, [])
let cleanFromForbiddenMoves = (posArr) => posArr.filter((pos) => pos[0] > 0 && pos[0] < 9 && pos[1] > 0 && pos[1] < 9)

module.exports = function canReach(startPos, finalPos, steps) {
  let posArr = [startPos]
  while (steps--) {
    posArr = cleanFromForbiddenMoves(getNextPosArr(posArr))
  }
  return posArr.some((pos) => equal(pos, finalPos))
}
