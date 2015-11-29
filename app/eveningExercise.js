exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
  return arr.indexOf(item);
},

  sum : function(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return sum;
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    str_array = str.split(" ");
    if (str_array[0].length > str_array[1].length) {
      return str_array[0];
    } else {
      return str_array[1];
    }
  },

  letterMoveForward : function(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var new_str = "";
    for (var i = 0; i < str.length; i++) {
      var index = alphabet.indexOf(str[i]);
      if (alphabet.includes(str[i])) {
        if (str[i] != "z") {
          new_str += alphabet[index + 1];
        }
        else {
          new_str += alphabet[0];
        }
      }
      else if (!isNaN(str[i])) {
        new_str += str[i];
      }
    }
  return new_str;
  },

  capitalizeWords : function(str) {
    var str_array = str.split(" ");
    var new_str = "";
    for (var i = 0; i < str_array.length; i++) {
      var sub_str = str_array[i];
      var first_char = sub_str[0];
      var rem_string = sub_str.substring(1);
      new_str += first_char.toUpperCase() + rem_string;
      if (i != (str_array.length) - 1) {
        new_str += " ";
      }

    }
    return new_str;
  }

};
