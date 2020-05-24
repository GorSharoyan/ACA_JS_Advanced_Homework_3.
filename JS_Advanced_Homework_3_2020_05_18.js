
//JS_Advanced_Homework_3
//Strings
//Exersice_1
function decimalComb() {
  let res = [];
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      res.push("0" + i);
    } else {
      res.push(String(i));
    }
  }
  return res;
}
//Strings
//Exersice_2
function upperCase(word, symb) {
  let newword = "";
  for (let i = 0; i < word.length; i++) {
    if (i == symb) {
      let newsymb = word[i].toUpperCase();
      newword += newsymb;
    } else {
      newword += word[i];
    }
  }
  return newword;
}
//Arrays
//Exersice_1
function filterRange(arr, a, b) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
//Arrays
//Exersice_2
function removeWord(arr, letter) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == letter.toUpperCase()) {
      continue;
    } else {
      newarr.push(arr[i]);
    }
  }

  return newarr;
}
//Arrays
//Exersice_3
function findById(arr, id) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["id"] == id) {
      res.push(i);
    }
  }
  if (res.length == 0) {
    return "No Data";
  } else {
    return arr[res[0]];
  }
}
//Arrays
//Exersice_4
//Method_1(Arr.includes)
function arrayIncludes(arr, element) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      res.push(arr[i]);
    }
  }
  if (res.length == 0) {
    return "element not included";
  } else {
    return res;
  }
}
//Method_2(Arr.join)
function joinArr(arr, element) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += element;
    res += arr[i];
  }
  return res;
}
//Method_3(Arr.slice())
function sliceArr(arr, first, last) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > first) {
      newarr.push(arr[i]);
      if (i >= last) {
        break;
      }
    }
  }
  return newarr;
}
//Method_4(Arr.fill())
function fillArr(arr, element) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(element);
  }
  return newarr;
}
//Method_5(Arr.findIndex())
function test(a) {
  if (a > 4) {
    return true;
  } else {
    return false;
  }
}

function findindexArr(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i]) == true) {
      return i;
    }
  }
}

//Objects
//Exersice_1
function objSize(obj) {
  let keys = Object.keys(obj);
  if (keys.length != 0) {
    return keys.length;
  } else {
    return "Empty";
  }
}
//Objects
//Exersice_2
//Write functions which check if key is in object
function keyInObject(obj, key) {
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return true;
    }
  }
}
//Objects
//Exersice_3
function valueInObject(obj, value) {
  let values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == value) {
      return true;
    }
  }
}
//Classwork
//Array_8
function stepArr(a, b, step) {
  let arr = [];
  if (step == 0) {
    step = 1;
  }
  for (let i = a; i < b; i += step) {
    arr.push(i);
  }
  if (arr.length == 0) {
    return "invalid format";
  } else {
    return arr;
  }
}
//Object_4
//way_1

function find(obj, key) {
  return obj[key];
}
//way_2

function find(arr, key) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i][key]);
  }
  return newarr;
}  