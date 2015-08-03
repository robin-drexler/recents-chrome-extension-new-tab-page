module.exports = function(array, how_many_slices) {
  if (array.length <= how_many_slices) {
    return [array];
  }

  var slices_length = array.length / how_many_slices + 1;
  var slices = [];

  for(var i = 0; i < array.length; i += how_many_slices) {
    slices.push(array.slice(i, i + how_many_slices));
  }

  return slices;
};