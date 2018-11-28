'use strict';

var _ = require('lodash');
var Base58 = require('./base58');
var buffer = require('buffer');
var blake256 = require('../crypto/hash').blake256;

var HcPrivateKeyCheck = function HcPrivateKeyCheck(obj) {
  if (!(this instanceof HcPrivateKeyCheck))
    return new HcPrivateKeyCheck(obj);
  if (Buffer.isBuffer(obj)) {
    var buf = obj;
    this.fromBuffer(buf);
  } else if (typeof obj === 'string') {
    var str = obj;
    this.fromString(str);
  } else if (obj) {
    this.set(obj);
  }
};

HcPrivateKeyCheck.prototype.set = function(obj) {
  this.buf = obj.buf || this.buf || undefined;
  return this;
};

HcPrivateKeyCheck.validChecksum = function validChecksum(data, checksum) {
  if (_.isString(data)) {
    data = new buffer.Buffer(Base58.decode(data));
  }
  if (_.isString(checksum)) {
    checksum = new buffer.Buffer(Base58.decode(checksum));
  }
  if (!checksum) {
    checksum = data.slice(-4);
    data = data.slice(0, -4);
  }
  return HcPrivateKeyCheck.checksum(data).toString('hex') === checksum.toString('hex');
};

HcPrivateKeyCheck.decode = function(s) {
  if (typeof s !== 'string')
    throw new Error('Input must be a string');

  var buf = new Buffer(Base58.decode(s));

  if (buf.length < 4)
    throw new Error("Input string too short");

  var data = buf.slice(0, -4);
  var csum = buf.slice(-4);

  var hash = blake256(data);
  var hash4 = hash.slice(0, 4);

  if (csum.toString('hex') !== hash4.toString('hex'))
    throw new Error("Checksum mismatch");

  return data;
};

HcPrivateKeyCheck.checksum = function(buffer) {
  return blake256(buffer).slice(0, 4);
};

HcPrivateKeyCheck.encode = function(buf) {
  if (!Buffer.isBuffer(buf))
    throw new Error('Input must be a buffer');
  var checkedBuf = new Buffer(buf.length + 4);
  var hash = HcPrivateKeyCheck.checksum(buf);
  buf.copy(checkedBuf);
  hash.copy(checkedBuf, buf.length);
  return Base58.encode(checkedBuf);
};

HcPrivateKeyCheck.prototype.fromBuffer = function(buf) {
  this.buf = buf;
  return this;
};

HcPrivateKeyCheck.prototype.fromString = function(str) {
  var buf = HcPrivateKeyCheck.decode(str);
  this.buf = buf;
  return this;
};

HcPrivateKeyCheck.prototype.toBuffer = function() {
  return this.buf;
};

HcPrivateKeyCheck.prototype.toString = function() {
  return HcPrivateKeyCheck.encode(this.buf);
};

module.exports = HcPrivateKeyCheck;

