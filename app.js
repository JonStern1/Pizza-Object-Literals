function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pizzaStore = {
  name: 'Ballard',
};

var b8Am = document.createElement('li');
var b8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b8Am.appendChild(b8AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b8Am);

var b9Am = document.createElement('li');
var b9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b9Am.appendChild(b9AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b9Am);

var b10Am = document.createElement('li');
var b10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b10Am.appendChild(b10AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b10Am);

var b11Am = document.createElement('li');
var b11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b11Am.appendChild(b11AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b11Am);

var b12Pm = document.createElement('li');
var b12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b12Pm.appendChild(b12PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b12Pm);

var b1Pm = document.createElement('li');
var b1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b1Pm.appendChild(b1PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b1Pm);

var b2Pm = document.createElement('li');
var b2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b2Pm.appendChild(b2PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b2Pm);

var b3Pm = document.createElement('li');
var b3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b3Pm.appendChild(b3PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b3Pm);

var b4Pm = document.createElement('li');
var b4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b4Pm.appendChild(b4PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b4Pm);

var b5Pm = document.createElement('li');
var b5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b5Pm.appendChild(b5PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b5Pm);

var b6Pm = document.createElement('li');
var b6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b6Pm.appendChild(b6PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b6Pm);

var b7Pm = document.createElement('li');
var b7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b7Pm.appendChild(b7PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b7Pm);

var b8Pm = document.createElement('li');
var b8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b8Pm.appendChild(b8PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b8Pm);

var b9Pm = document.createElement('li');
var b9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b9Pm.appendChild(b9PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b9Pm);

var b10Pm = document.createElement('li');
var b10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b10Pm.appendChild(b10PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b10Pm);

var b11Pm = document.createElement('li');
var b11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b11Pm.appendChild(b11PmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b11Pm);

var b12Am = document.createElement('li');
var b12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b12Am.appendChild(b12AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b12Am);

var b1Am = document.createElement('li');
var b1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b1Am.appendChild(b1AmText);
var bposition = document.getElementsByTagName('ul')[0];
bposition.appendChild(b1Am);

console.log('ballard working?');

var pizzaStore = {
  name: 'First Hill',
};

var f8Am = document.createElement('li');
var f8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f8Am.appendChild(f8AmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f8Am);

var f9Am = document.createElement('li');
var f9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f9Am.appendChild(f9AmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(b9Am);

var f10Am = document.createElement('li');
var f10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f10Am.appendChild(f10AmText);
var bposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f10Am);

var f11Am = document.createElement('li');
var f11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f11Am.appendChild(f11AmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(b11Am);

var f12Pm = document.createElement('li');
var f12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f12Pm.appendChild(f12PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f12Pm);

var f1Pm = document.createElement('li');
var f1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
f1Pm.appendChild(f1PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f1Pm);

var f2Pm = document.createElement('li');
var f2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
f2Pm.appendChild(f2PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f2Pm);

var f3Pm = document.createElement('li');
var f3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
f3Pm.appendChild(f3PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f3Pm);

var f4Pm = document.createElement('li');
var f4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
f4Pm.appendChild(f4PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f4Pm);

var f5Pm = document.createElement('li');
var f5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
f5Pm.appendChild(f5PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f5Pm);

var f6Pm = document.createElement('li');
var f6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
f6Pm.appendChild(f6PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f6Pm);

var f7Pm = document.createElement('li');
var f7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
f7Pm.appendChild(f7PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f7Pm);

var f8Pm = document.createElement('li');
var f8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
f8Pm.appendChild(f8PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f8Pm);

var f9Pm = document.createElement('li');
var f9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
f9Pm.appendChild(f9PmText);
var bposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f9Pm);

var f10Pm = document.createElement('li');
var f10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
f10Pm.appendChild(f10PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f10Pm);

var f11Pm = document.createElement('li');
var f11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
f11Pm.appendChild(f11PmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f11Pm);

var f12Am = document.createElement('li');
var f12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
f12Am.appendChild(f12AmText);
var bposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f12Am);

var f1Am = document.createElement('li');
var f1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
f1Am.appendChild(f1AmText);
var fposition = document.getElementsByTagName('ul')[1];
fposition.appendChild(f1Am);

console.log('first hill working?');

var pizzaStore = {
  name: 'The International District',
};

var i8Am = document.createElement('li');
var i8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i8Am.appendChild(i8AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i8Am);

var i9Am = document.createElement('li');
var i9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i9Am.appendChild(i9AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i9Am);

var i10Am = document.createElement('li');
var i10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i10Am.appendChild(i10AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i10Am);

var i11Am = document.createElement('li');
var i11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i11Am.appendChild(i11AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i11Am);

var i12Pm = document.createElement('li');
var i12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i12Pm.appendChild(i12PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i12Pm);

var i1Pm = document.createElement('li');
var i1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
i1Pm.appendChild(i1PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i1Pm);

var i2Pm = document.createElement('li');
var i2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
i2Pm.appendChild(i2PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i2Pm);

var i3Pm = document.createElement('li');
var i3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
i3Pm.appendChild(i3PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i3Pm);

var i4Pm = document.createElement('li');
var i4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
i4Pm.appendChild(i4PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i4Pm);

var i5Pm = document.createElement('li');
var i5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
i5Pm.appendChild(i5PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i5Pm);

var i6Pm = document.createElement('li');
var i6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
i6Pm.appendChild(i6PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i6Pm);

var i7Pm = document.createElement('li');
var i7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
i7Pm.appendChild(i7PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i7Pm);

var i8Pm = document.createElement('li');
var i8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
i8Pm.appendChild(i8PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i8Pm);

var i9Pm = document.createElement('li');
var i9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
i9Pm.appendChild(i9PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i9Pm);

var i10Pm = document.createElement('li');
var i10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
i10Pm.appendChild(i10PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i10Pm);

var i11Pm = document.createElement('li');
var i11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
i11Pm.appendChild(i11PmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i11Pm);

var i12Am = document.createElement('li');
var i12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
i12Am.appendChild(i12AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i12Am);

var i1Am = document.createElement('li');
var i1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
i1Am.appendChild(i1AmText);
var iposition = document.getElementsByTagName('ul')[2];
iposition.appendChild(i1Am);

console.log('international district working?');

var pizzaStore = {
  name: 'South Lake Union',
};

var s8Am = document.createElement('li');
var s8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s8Am.appendChild(s8AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s8Am);

var s9Am = document.createElement('li');
var s9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s9Am.appendChild(s9AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s9Am);

var s10Am = document.createElement('li');
var s10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s10Am.appendChild(s10AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s10Am);

var s11Am = document.createElement('li');
var s11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s11Am.appendChild(s11AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s11Am);

var s12Pm = document.createElement('li');
var s12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s12Pm.appendChild(s12PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s12Pm);

var s1Pm = document.createElement('li');
var s1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
s1Pm.appendChild(s1PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s1Pm);

var s2Pm = document.createElement('li');
var s2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
s2Pm.appendChild(s2PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s2Pm);

var s3Pm = document.createElement('li');
var s3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
s3Pm.appendChild(s3PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s3Pm);

var s4Pm = document.createElement('li');
var s4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
s4Pm.appendChild(s4PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s4Pm);

var s5Pm = document.createElement('li');
var s5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
s5Pm.appendChild(s5PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s5Pm);

var s6Pm = document.createElement('li');
var s6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
s6Pm.appendChild(s6PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s6Pm);

var s7Pm = document.createElement('li');
var s7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
s7Pm.appendChild(s7PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s7Pm);

var s8Pm = document.createElement('li');
var s8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
s8Pm.appendChild(s8PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s8Pm);

var s9Pm = document.createElement('li');
var s9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
s9Pm.appendChild(s9PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s9Pm);

var s10Pm = document.createElement('li');
var s10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
s10Pm.appendChild(s10PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s10Pm);

var s11Pm = document.createElement('li');
var s11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
s11Pm.appendChild(s11PmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s11Pm);

var s12Am = document.createElement('li');
var s12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
s12Am.appendChild(s12AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s12Am);

var s1Am = document.createElement('li');
var s1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
s1Am.appendChild(s1AmText);
var sposition = document.getElementsByTagName('ul')[3];
sposition.appendChild(s1Am);

console.log('South Lake Union working?');

var pizzaStore = {
  name: 'Georgetown',
};

var b8Am = document.createElement('li');
var b8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b8Am.appendChild(b8AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b8Am);

var b9Am = document.createElement('li');
var b9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b9Am.appendChild(b9AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b9Am);

var b10Am = document.createElement('li');
var b10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b10Am.appendChild(b10AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b10Am);

var b11Am = document.createElement('li');
var b11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b11Am.appendChild(b11AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b11Am);

var b12Pm = document.createElement('li');
var b12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b12Pm.appendChild(b12PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b12Pm);

var b1Pm = document.createElement('li');
var b1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b1Pm.appendChild(b1PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b1Pm);

var b2Pm = document.createElement('li');
var b2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b2Pm.appendChild(b2PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b2Pm);

var b3Pm = document.createElement('li');
var b3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b3Pm.appendChild(b3PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b3Pm);

var b4Pm = document.createElement('li');
var b4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b4Pm.appendChild(b4PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b4Pm);

var b5Pm = document.createElement('li');
var b5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b5Pm.appendChild(b5PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b5Pm);

var b6Pm = document.createElement('li');
var b6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b6Pm.appendChild(b6PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b6Pm);

var b7Pm = document.createElement('li');
var b7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b7Pm.appendChild(b7PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b7Pm);

var b8Pm = document.createElement('li');
var b8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b8Pm.appendChild(b8PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b8Pm);

var b9Pm = document.createElement('li');
var b9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b9Pm.appendChild(b9PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b9Pm);

var b10Pm = document.createElement('li');
var b10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b10Pm.appendChild(b10PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b10Pm);

var b11Pm = document.createElement('li');
var b11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b11Pm.appendChild(b11PmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b11Pm);

var b12Am = document.createElement('li');
var b12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b12Am.appendChild(b12AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b12Am);

var b1Am = document.createElement('li');
var b1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b1Am.appendChild(b1AmText);
var bposition = document.getElementsByTagName('ul')[4];
bposition.appendChild(b1Am);

console.log('Georgetown working?');

var pizzaStore = {
  name: 'Ravenna',
};

var b8Am = document.createElement('li');
var b8AmText = document.createTextNode('8:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b8Am.appendChild(b8AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b8Am);

var b9Am = document.createElement('li');
var b9AmText = document.createTextNode('9:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b9Am.appendChild(b9AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b9Am);

var b10Am = document.createElement('li');
var b10AmText = document.createTextNode('10:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,4) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b10Am.appendChild(b10AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b10Am);

var b11Am = document.createElement('li');
var b11AmText = document.createTextNode('11:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b11Am.appendChild(b11AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b11Am);

var b12Pm = document.createElement('li');
var b12PmText = document.createTextNode('12:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b12Pm.appendChild(b12PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b12Pm);

var b1Pm = document.createElement('li');
var b1PmText = document.createTextNode('1:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(0,7) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(0,4) / 3 + ' ]');
b1Pm.appendChild(b1PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b1Pm);

var b2Pm = document.createElement('li');
var b2PmText = document.createTextNode('2:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b2Pm.appendChild(b2PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b2Pm);

var b3Pm = document.createElement('li');
var b3PmText = document.createTextNode('3:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b3Pm.appendChild(b3PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b3Pm);

var b4Pm = document.createElement('li');
var b4PmText = document.createTextNode('4:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(2,15) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(1,4) / 3 + ' ]');
b4Pm.appendChild(b4PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b4Pm);

var b5Pm = document.createElement('li');
var b5PmText = document.createTextNode('5:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b5Pm.appendChild(b5PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b5Pm);

var b6Pm = document.createElement('li');
var b6PmText = document.createTextNode('6:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b6Pm.appendChild(b6PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b6Pm);

var b7Pm = document.createElement('li');
var b7PmText = document.createTextNode('7:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(15,35) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(3,8) / 3 + ' ]');
b7Pm.appendChild(b7PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b7Pm);

var b8Pm = document.createElement('li');
var b8PmText = document.createTextNode('8:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b8Pm.appendChild(b8PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b8Pm);

var b9Pm = document.createElement('li');
var b9PmText = document.createTextNode('9:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b9Pm.appendChild(b9PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b9Pm);

var b10Pm = document.createElement('li');
var b10PmText = document.createTextNode('10:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(12,31) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(5,12) / 3 + ' ]');
b10Pm.appendChild(b10PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b10Pm);

var b11Pm = document.createElement('li');
var b11PmText = document.createTextNode('11:00pm ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b11Pm.appendChild(b11PmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b11Pm);

var b12Am = document.createElement('li');
var b12AmText = document.createTextNode('12:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b12Am.appendChild(b12AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b12Am);

var b1Am = document.createElement('li');
var b1AmText = document.createTextNode('1:00am ' + getRandomIntInclusive(0,4) + ' pizzas, ' + getRandomIntInclusive(5,20) + ' deliveries -- [ drivers recommended: ' + getRandomIntInclusive(6,11) / 3 + ' ]');
b1Am.appendChild(b1AmText);
var bposition = document.getElementsByTagName('ul')[5];
bposition.appendChild(b1Am);

console.log('Ravenna working?');

/* Should I put in method for drivers under each time or at the end for each store? From there, need to find how to get this wonderful data to the sales-data page. Also, need to figure out how to total pizza sales for a week*/
