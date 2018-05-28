import pluralize from 'pluralize';

export const chopText = (str, br=44) => {
  // chops text on whitespace using a max specified length
  // seems a bit buggy on larger text sets

  const break_at_or_before = br;
  // change this value to adjust break length

  let running_idx = 0;
  let closest_idx = 0;
  let counter = 0;
  let good_idxs = [];

  for (let i = 0; i < str.length; i++) {
    let matched = str.slice(i,str.length).match(/\s/);
    if (matched === null ) continue;

    running_idx += matched.index + 1;
    if ((running_idx / break_at_or_before) - counter < 1) {
      closest_idx = running_idx ;
    } else {
      counter += 1;
      good_idxs.push(closest_idx);
    }

    i += matched.index;
  }

  good_idxs.push(str.length);

  let choppedText = [];
  let start = 0;
  let end = 0;
  good_idxs.forEach(idx => {
    end = idx;
    choppedText.push(str.slice(start, end));
    start = idx;
  });

  return choppedText;
};

const dictionary = [
  "arrow",
  "bush",
  "magic",
  "letter",
  "wall",
  "mouth",
];

const checkForA = (text, last) => {
  // kinda messy, but works.
  text = text.concat(last);

  for (let i = 0; i < dictionary.length; i++) {
    if (text.includes( dictionary[i]) ) {return true;}
  }

  return false;
};

export const upgradeText = (text) => {
  // takes parsed filenames and makes them less clunky
  // rich_soil => rich soil // magic_mouth => magic mouth

  // keeps 'soil' as 'soil', etc.
  // 'isPlural' still == true though
  dictionary.forEach(word => {
    pluralize.addUncountableRule(word);
  });
  pluralize.addUncountableRule("soil");

  pluralize.addIrregularRule('alphabet', 'letter');

  text = text.replace('_', ' ').split(" ");
  let last = pluralize(text.pop());

  if ( checkForA(text, last) ) {
    text.unshift("a");
  } else if  ( pluralize.isPlural(last) ) {
    text.unshift("some");
  }

  return text.concat(last).join(" ");
};

export const findObjByKey = (set, findKey) => {
  // set is an array
  if ( !(set instanceof Array) ) {
    return console.log('findObjByKey type error!');
  } else {
    return set.find( el =>
       Object.keys(el).includes(findKey)
    );
  }
};
