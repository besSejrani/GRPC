// source: nested-messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Person');
goog.provide('proto.Person.Address');
goog.provide('proto.Person.EyeColour');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Date');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Person.repeatedFields_, null);
};
goog.inherits(proto.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Person.displayName = 'proto.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Person.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Person.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Person.Address.displayName = 'proto.Person.Address';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Person.repeatedFields_ = [7,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    age: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    smallPicture: msg.getSmallPicture_asB64(),
    isProfileVerified: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    phoneNumbersList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    eyeColour: jspb.Message.getFieldWithDefault(msg, 8, 0),
    birthay: (f = msg.getBirthay()) && proto.Date.toObject(includeInstance, f),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.Person.Address.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Person}
 */
proto.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Person;
  return proto.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Person}
 */
proto.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSmallPicture(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProfileVerified(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhoneNumbers(value);
      break;
    case 8:
      var value = /** @type {!proto.Person.EyeColour} */ (reader.readEnum());
      msg.setEyeColour(value);
      break;
    case 9:
      var value = new proto.Date;
      reader.readMessage(value,proto.Date.deserializeBinaryFromReader);
      msg.setBirthay(value);
      break;
    case 10:
      var value = new proto.Person.Address;
      reader.readMessage(value,proto.Person.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSmallPicture_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getIsProfileVerified();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getPhoneNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getEyeColour();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getBirthay();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.Date.serializeBinaryToWriter
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.Person.Address.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.Person.EyeColour = {
  UNKNOWN_EYE_COLOR: 0,
  EYE_GREEN: 1,
  EYE_BROWN: 2,
  EYE_BLUE: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Person.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.Person.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Person.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressLine1: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressLine2: jspb.Message.getFieldWithDefault(msg, 2, ""),
    zipCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    country: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Person.Address}
 */
proto.Person.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Person.Address;
  return proto.Person.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Person.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Person.Address}
 */
proto.Person.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressLine1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressLine2(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Person.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Person.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Person.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Person.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressLine1();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddressLine2();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string address_line_1 = 1;
 * @return {string}
 */
proto.Person.Address.prototype.getAddressLine1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person.Address} returns this
 */
proto.Person.Address.prototype.setAddressLine1 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address_line_2 = 2;
 * @return {string}
 */
proto.Person.Address.prototype.getAddressLine2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person.Address} returns this
 */
proto.Person.Address.prototype.setAddressLine2 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string zip_code = 3;
 * @return {string}
 */
proto.Person.Address.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person.Address} returns this
 */
proto.Person.Address.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.Person.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person.Address} returns this
 */
proto.Person.Address.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.Person.Address.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person.Address} returns this
 */
proto.Person.Address.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 age = 1;
 * @return {number}
 */
proto.Person.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.Person.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.Person.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes small_picture = 4;
 * @return {string}
 */
proto.Person.prototype.getSmallPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes small_picture = 4;
 * This is a type-conversion wrapper around `getSmallPicture()`
 * @return {string}
 */
proto.Person.prototype.getSmallPicture_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSmallPicture()));
};


/**
 * optional bytes small_picture = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSmallPicture()`
 * @return {!Uint8Array}
 */
proto.Person.prototype.getSmallPicture_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSmallPicture()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setSmallPicture = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bool is_profile_verified = 5;
 * @return {boolean}
 */
proto.Person.prototype.getIsProfileVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setIsProfileVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional float height = 6;
 * @return {number}
 */
proto.Person.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated string phone_numbers = 7;
 * @return {!Array<string>}
 */
proto.Person.prototype.getPhoneNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setPhoneNumbersList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.addPhoneNumbers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.clearPhoneNumbersList = function() {
  return this.setPhoneNumbersList([]);
};


/**
 * optional EyeColour eye_colour = 8;
 * @return {!proto.Person.EyeColour}
 */
proto.Person.prototype.getEyeColour = function() {
  return /** @type {!proto.Person.EyeColour} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.Person.EyeColour} value
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.setEyeColour = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional Date birthay = 9;
 * @return {?proto.Date}
 */
proto.Person.prototype.getBirthay = function() {
  return /** @type{?proto.Date} */ (
    jspb.Message.getWrapperField(this, proto.Date, 9));
};


/**
 * @param {?proto.Date|undefined} value
 * @return {!proto.Person} returns this
*/
proto.Person.prototype.setBirthay = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.clearBirthay = function() {
  return this.setBirthay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Person.prototype.hasBirthay = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Address addresses = 10;
 * @return {!Array<!proto.Person.Address>}
 */
proto.Person.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.Person.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Person.Address, 10));
};


/**
 * @param {!Array<!proto.Person.Address>} value
 * @return {!proto.Person} returns this
*/
proto.Person.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.Person.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Person.Address}
 */
proto.Person.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.Person.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Person} returns this
 */
proto.Person.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


