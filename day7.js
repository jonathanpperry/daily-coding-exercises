// const sToT = {};
// sToT[sourceCharacter] = targetCharacter;

// const mappedCharacter = sToT[sourceCharacter];

function isIsomorphic(s, t) {
  const sToT = {};
  const tToS = {};

  for (let i = 0; i < s.length; i++) {
    const sourceCharacter = s[i];
    const targetCharacter = t[i];

    if (
      sToT[sourceCharacter] === undefined &&
      tToS[targetCharacter] === undefined
    ) {
      sToT[sourceCharacter] = targetCharacter;
      tToS[targetCharacter] = sourceCharacter;
    } else {
      if (
        sToT[sourceCharacter] !== targetCharacter ||
        tToS[targetCharacter] !== sourceCharacter
      ) {
        return false;
      }
    }
  }
  return true;
}
