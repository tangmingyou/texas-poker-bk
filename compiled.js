/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.Proto = (function() {

        /**
         * Properties of a Proto.
         * @memberof message
         * @interface IProto
         * @property {number|null} [ver] Proto ver
         * @property {number|null} [op] Proto op
         * @property {number|null} [seq] Proto seq
         * @property {Uint8Array|null} [body] Proto body
         */

        /**
         * Constructs a new Proto.
         * @memberof message
         * @classdesc Represents a Proto.
         * @implements IProto
         * @constructor
         * @param {message.IProto=} [properties] Properties to set
         */
        function Proto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Proto ver.
         * @member {number} ver
         * @memberof message.Proto
         * @instance
         */
        Proto.prototype.ver = 0;

        /**
         * Proto op.
         * @member {number} op
         * @memberof message.Proto
         * @instance
         */
        Proto.prototype.op = 0;

        /**
         * Proto seq.
         * @member {number} seq
         * @memberof message.Proto
         * @instance
         */
        Proto.prototype.seq = 0;

        /**
         * Proto body.
         * @member {Uint8Array} body
         * @memberof message.Proto
         * @instance
         */
        Proto.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Proto instance using the specified properties.
         * @function create
         * @memberof message.Proto
         * @static
         * @param {message.IProto=} [properties] Properties to set
         * @returns {message.Proto} Proto instance
         */
        Proto.create = function create(properties) {
            return new Proto(properties);
        };

        /**
         * Encodes the specified Proto message. Does not implicitly {@link message.Proto.verify|verify} messages.
         * @function encode
         * @memberof message.Proto
         * @static
         * @param {message.IProto} message Proto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Proto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ver);
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.op);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seq);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Proto message, length delimited. Does not implicitly {@link message.Proto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Proto
         * @static
         * @param {message.IProto} message Proto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Proto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Proto message from the specified reader or buffer.
         * @function decode
         * @memberof message.Proto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Proto} Proto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Proto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Proto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ver = reader.int32();
                        break;
                    }
                case 2: {
                        message.op = reader.int32();
                        break;
                    }
                case 3: {
                        message.seq = reader.int32();
                        break;
                    }
                case 4: {
                        message.body = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Proto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Proto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Proto} Proto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Proto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Proto message.
         * @function verify
         * @memberof message.Proto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Proto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isInteger(message.ver))
                    return "ver: integer expected";
            if (message.op != null && message.hasOwnProperty("op"))
                if (!$util.isInteger(message.op))
                    return "op: integer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Proto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Proto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.Proto} Proto
         */
        Proto.fromObject = function fromObject(object) {
            if (object instanceof $root.message.Proto)
                return object;
            var message = new $root.message.Proto();
            if (object.ver != null)
                message.ver = object.ver | 0;
            if (object.op != null)
                message.op = object.op | 0;
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length >= 0)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Proto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Proto
         * @static
         * @param {message.Proto} message Proto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Proto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ver = 0;
                object.op = 0;
                object.seq = 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = message.op;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Proto to JSON.
         * @function toJSON
         * @memberof message.Proto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Proto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Proto
         * @function getTypeUrl
         * @memberof message.Proto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Proto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.Proto";
        };

        return Proto;
    })();

    message.Ping = (function() {

        /**
         * Properties of a Ping.
         * @memberof message
         * @interface IPing
         */

        /**
         * Constructs a new Ping.
         * @memberof message
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {message.IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof message.Ping
         * @static
         * @param {message.IPing=} [properties] Properties to set
         * @returns {message.Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };

        /**
         * Encodes the specified Ping message. Does not implicitly {@link message.Ping.verify|verify} messages.
         * @function encode
         * @memberof message.Ping
         * @static
         * @param {message.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link message.Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Ping
         * @static
         * @param {message.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof message.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ping message.
         * @function verify
         * @memberof message.Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.message.Ping)
                return object;
            return new $root.message.Ping();
        };

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Ping
         * @static
         * @param {message.Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof message.Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ping
         * @function getTypeUrl
         * @memberof message.Ping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.Ping";
        };

        return Ping;
    })();

    message.Pong = (function() {

        /**
         * Properties of a Pong.
         * @memberof message
         * @interface IPong
         */

        /**
         * Constructs a new Pong.
         * @memberof message
         * @classdesc Represents a Pong.
         * @implements IPong
         * @constructor
         * @param {message.IPong=} [properties] Properties to set
         */
        function Pong(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Pong instance using the specified properties.
         * @function create
         * @memberof message.Pong
         * @static
         * @param {message.IPong=} [properties] Properties to set
         * @returns {message.Pong} Pong instance
         */
        Pong.create = function create(properties) {
            return new Pong(properties);
        };

        /**
         * Encodes the specified Pong message. Does not implicitly {@link message.Pong.verify|verify} messages.
         * @function encode
         * @memberof message.Pong
         * @static
         * @param {message.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link message.Pong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Pong
         * @static
         * @param {message.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @function decode
         * @memberof message.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Pong();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pong message.
         * @function verify
         * @memberof message.Pong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Pong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.Pong} Pong
         */
        Pong.fromObject = function fromObject(object) {
            if (object instanceof $root.message.Pong)
                return object;
            return new $root.message.Pong();
        };

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Pong
         * @static
         * @param {message.Pong} message Pong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pong.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Pong to JSON.
         * @function toJSON
         * @memberof message.Pong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pong
         * @function getTypeUrl
         * @memberof message.Pong
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.Pong";
        };

        return Pong;
    })();

    message.ReqIdentity = (function() {

        /**
         * Properties of a ReqIdentity.
         * @memberof message
         * @interface IReqIdentity
         * @property {string|null} [token] ReqIdentity token
         */

        /**
         * Constructs a new ReqIdentity.
         * @memberof message
         * @classdesc Represents a ReqIdentity.
         * @implements IReqIdentity
         * @constructor
         * @param {message.IReqIdentity=} [properties] Properties to set
         */
        function ReqIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqIdentity token.
         * @member {string} token
         * @memberof message.ReqIdentity
         * @instance
         */
        ReqIdentity.prototype.token = "";

        /**
         * Creates a new ReqIdentity instance using the specified properties.
         * @function create
         * @memberof message.ReqIdentity
         * @static
         * @param {message.IReqIdentity=} [properties] Properties to set
         * @returns {message.ReqIdentity} ReqIdentity instance
         */
        ReqIdentity.create = function create(properties) {
            return new ReqIdentity(properties);
        };

        /**
         * Encodes the specified ReqIdentity message. Does not implicitly {@link message.ReqIdentity.verify|verify} messages.
         * @function encode
         * @memberof message.ReqIdentity
         * @static
         * @param {message.IReqIdentity} message ReqIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified ReqIdentity message, length delimited. Does not implicitly {@link message.ReqIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ReqIdentity
         * @static
         * @param {message.IReqIdentity} message ReqIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof message.ReqIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ReqIdentity} ReqIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ReqIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ReqIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ReqIdentity} ReqIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqIdentity message.
         * @function verify
         * @memberof message.ReqIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a ReqIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ReqIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ReqIdentity} ReqIdentity
         */
        ReqIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ReqIdentity)
                return object;
            var message = new $root.message.ReqIdentity();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a ReqIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ReqIdentity
         * @static
         * @param {message.ReqIdentity} message ReqIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this ReqIdentity to JSON.
         * @function toJSON
         * @memberof message.ReqIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqIdentity
         * @function getTypeUrl
         * @memberof message.ReqIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ReqIdentity";
        };

        return ReqIdentity;
    })();

    message.ResIdentity = (function() {

        /**
         * Properties of a ResIdentity.
         * @memberof message
         * @interface IResIdentity
         * @property {number|null} [status] ResIdentity status
         * @property {string|null} [msg] ResIdentity msg
         */

        /**
         * Constructs a new ResIdentity.
         * @memberof message
         * @classdesc Represents a ResIdentity.
         * @implements IResIdentity
         * @constructor
         * @param {message.IResIdentity=} [properties] Properties to set
         */
        function ResIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResIdentity status.
         * @member {number} status
         * @memberof message.ResIdentity
         * @instance
         */
        ResIdentity.prototype.status = 0;

        /**
         * ResIdentity msg.
         * @member {string} msg
         * @memberof message.ResIdentity
         * @instance
         */
        ResIdentity.prototype.msg = "";

        /**
         * Creates a new ResIdentity instance using the specified properties.
         * @function create
         * @memberof message.ResIdentity
         * @static
         * @param {message.IResIdentity=} [properties] Properties to set
         * @returns {message.ResIdentity} ResIdentity instance
         */
        ResIdentity.create = function create(properties) {
            return new ResIdentity(properties);
        };

        /**
         * Encodes the specified ResIdentity message. Does not implicitly {@link message.ResIdentity.verify|verify} messages.
         * @function encode
         * @memberof message.ResIdentity
         * @static
         * @param {message.IResIdentity} message ResIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ResIdentity message, length delimited. Does not implicitly {@link message.ResIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ResIdentity
         * @static
         * @param {message.IResIdentity} message ResIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof message.ResIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ResIdentity} ResIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ResIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ResIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ResIdentity} ResIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResIdentity message.
         * @function verify
         * @memberof message.ResIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a ResIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ResIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ResIdentity} ResIdentity
         */
        ResIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ResIdentity)
                return object;
            var message = new $root.message.ResIdentity();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a ResIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ResIdentity
         * @static
         * @param {message.ResIdentity} message ResIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.msg = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ResIdentity to JSON.
         * @function toJSON
         * @memberof message.ResIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResIdentity
         * @function getTypeUrl
         * @memberof message.ResIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ResIdentity";
        };

        return ResIdentity;
    })();

    return message;
})();

module.exports = $root;
