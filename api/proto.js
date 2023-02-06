/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.ProtoWrap = (function() {

        /**
         * Properties of a ProtoWrap.
         * @memberof api
         * @interface IProtoWrap
         * @property {number|null} [ver] ProtoWrap ver
         * @property {number|null} [op] ProtoWrap op
         * @property {number|null} [seq] ProtoWrap seq
         * @property {boolean|null} [success] ProtoWrap success
         * @property {Uint8Array|null} [body] ProtoWrap body
         */

        /**
         * Constructs a new ProtoWrap.
         * @memberof api
         * @classdesc Represents a ProtoWrap.
         * @implements IProtoWrap
         * @constructor
         * @param {api.IProtoWrap=} [properties] Properties to set
         */
        function ProtoWrap(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoWrap ver.
         * @member {number} ver
         * @memberof api.ProtoWrap
         * @instance
         */
        ProtoWrap.prototype.ver = 0;

        /**
         * ProtoWrap op.
         * @member {number} op
         * @memberof api.ProtoWrap
         * @instance
         */
        ProtoWrap.prototype.op = 0;

        /**
         * ProtoWrap seq.
         * @member {number} seq
         * @memberof api.ProtoWrap
         * @instance
         */
        ProtoWrap.prototype.seq = 0;

        /**
         * ProtoWrap success.
         * @member {boolean} success
         * @memberof api.ProtoWrap
         * @instance
         */
        ProtoWrap.prototype.success = false;

        /**
         * ProtoWrap body.
         * @member {Uint8Array} body
         * @memberof api.ProtoWrap
         * @instance
         */
        ProtoWrap.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new ProtoWrap instance using the specified properties.
         * @function create
         * @memberof api.ProtoWrap
         * @static
         * @param {api.IProtoWrap=} [properties] Properties to set
         * @returns {api.ProtoWrap} ProtoWrap instance
         */
        ProtoWrap.create = function create(properties) {
            return new ProtoWrap(properties);
        };

        /**
         * Encodes the specified ProtoWrap message. Does not implicitly {@link api.ProtoWrap.verify|verify} messages.
         * @function encode
         * @memberof api.ProtoWrap
         * @static
         * @param {api.IProtoWrap} message ProtoWrap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoWrap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ver);
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.op);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seq);
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.success);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified ProtoWrap message, length delimited. Does not implicitly {@link api.ProtoWrap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ProtoWrap
         * @static
         * @param {api.IProtoWrap} message ProtoWrap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoWrap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtoWrap message from the specified reader or buffer.
         * @function decode
         * @memberof api.ProtoWrap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ProtoWrap} ProtoWrap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoWrap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ProtoWrap();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
                        message.success = reader.bool();
                        break;
                    }
                case 7: {
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
         * Decodes a ProtoWrap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ProtoWrap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ProtoWrap} ProtoWrap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoWrap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtoWrap message.
         * @function verify
         * @memberof api.ProtoWrap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoWrap.verify = function verify(message) {
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
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a ProtoWrap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ProtoWrap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ProtoWrap} ProtoWrap
         */
        ProtoWrap.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ProtoWrap)
                return object;
            let message = new $root.api.ProtoWrap();
            if (object.ver != null)
                message.ver = object.ver | 0;
            if (object.op != null)
                message.op = object.op | 0;
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length >= 0)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a ProtoWrap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ProtoWrap
         * @static
         * @param {api.ProtoWrap} message ProtoWrap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoWrap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = 0;
                object.op = 0;
                object.seq = 0;
                object.success = false;
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
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this ProtoWrap to JSON.
         * @function toJSON
         * @memberof api.ProtoWrap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoWrap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoWrap
         * @function getTypeUrl
         * @memberof api.ProtoWrap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoWrap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ProtoWrap";
        };

        return ProtoWrap;
    })();

    api.Ping = (function() {

        /**
         * Properties of a Ping.
         * @memberof api
         * @interface IPing
         * @property {number|Long|null} [timeMs] Ping timeMs
         */

        /**
         * Constructs a new Ping.
         * @memberof api
         * @classdesc Represents a Ping.
         * @implements IPing
         * @constructor
         * @param {api.IPing=} [properties] Properties to set
         */
        function Ping(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ping timeMs.
         * @member {number|Long} timeMs
         * @memberof api.Ping
         * @instance
         */
        Ping.prototype.timeMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Ping instance using the specified properties.
         * @function create
         * @memberof api.Ping
         * @static
         * @param {api.IPing=} [properties] Properties to set
         * @returns {api.Ping} Ping instance
         */
        Ping.create = function create(properties) {
            return new Ping(properties);
        };

        /**
         * Encodes the specified Ping message. Does not implicitly {@link api.Ping.verify|verify} messages.
         * @function encode
         * @memberof api.Ping
         * @static
         * @param {api.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeMs != null && Object.hasOwnProperty.call(message, "timeMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timeMs);
            return writer;
        };

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link api.Ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Ping
         * @static
         * @param {api.IPing} message Ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @function decode
         * @memberof api.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Ping} Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Ping();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timeMs = reader.uint64();
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
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Ping} Ping
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
         * @memberof api.Ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeMs != null && message.hasOwnProperty("timeMs"))
                if (!$util.isInteger(message.timeMs) && !(message.timeMs && $util.isInteger(message.timeMs.low) && $util.isInteger(message.timeMs.high)))
                    return "timeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Ping} Ping
         */
        Ping.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Ping)
                return object;
            let message = new $root.api.Ping();
            if (object.timeMs != null)
                if ($util.Long)
                    (message.timeMs = $util.Long.fromValue(object.timeMs)).unsigned = true;
                else if (typeof object.timeMs === "string")
                    message.timeMs = parseInt(object.timeMs, 10);
                else if (typeof object.timeMs === "number")
                    message.timeMs = object.timeMs;
                else if (typeof object.timeMs === "object")
                    message.timeMs = new $util.LongBits(object.timeMs.low >>> 0, object.timeMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Ping
         * @static
         * @param {api.Ping} message Ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeMs = options.longs === String ? "0" : 0;
            if (message.timeMs != null && message.hasOwnProperty("timeMs"))
                if (typeof message.timeMs === "number")
                    object.timeMs = options.longs === String ? String(message.timeMs) : message.timeMs;
                else
                    object.timeMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeMs) : options.longs === Number ? new $util.LongBits(message.timeMs.low >>> 0, message.timeMs.high >>> 0).toNumber(true) : message.timeMs;
            return object;
        };

        /**
         * Converts this Ping to JSON.
         * @function toJSON
         * @memberof api.Ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ping
         * @function getTypeUrl
         * @memberof api.Ping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Ping";
        };

        return Ping;
    })();

    api.Pong = (function() {

        /**
         * Properties of a Pong.
         * @memberof api
         * @interface IPong
         * @property {number|Long|null} [timeMs] Pong timeMs
         */

        /**
         * Constructs a new Pong.
         * @memberof api
         * @classdesc Represents a Pong.
         * @implements IPong
         * @constructor
         * @param {api.IPong=} [properties] Properties to set
         */
        function Pong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pong timeMs.
         * @member {number|Long} timeMs
         * @memberof api.Pong
         * @instance
         */
        Pong.prototype.timeMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Pong instance using the specified properties.
         * @function create
         * @memberof api.Pong
         * @static
         * @param {api.IPong=} [properties] Properties to set
         * @returns {api.Pong} Pong instance
         */
        Pong.create = function create(properties) {
            return new Pong(properties);
        };

        /**
         * Encodes the specified Pong message. Does not implicitly {@link api.Pong.verify|verify} messages.
         * @function encode
         * @memberof api.Pong
         * @static
         * @param {api.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeMs != null && Object.hasOwnProperty.call(message, "timeMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timeMs);
            return writer;
        };

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link api.Pong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Pong
         * @static
         * @param {api.IPong} message Pong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @function decode
         * @memberof api.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Pong} Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Pong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.timeMs = reader.uint64();
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
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Pong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Pong} Pong
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
         * @memberof api.Pong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeMs != null && message.hasOwnProperty("timeMs"))
                if (!$util.isInteger(message.timeMs) && !(message.timeMs && $util.isInteger(message.timeMs.low) && $util.isInteger(message.timeMs.high)))
                    return "timeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Pong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Pong} Pong
         */
        Pong.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Pong)
                return object;
            let message = new $root.api.Pong();
            if (object.timeMs != null)
                if ($util.Long)
                    (message.timeMs = $util.Long.fromValue(object.timeMs)).unsigned = true;
                else if (typeof object.timeMs === "string")
                    message.timeMs = parseInt(object.timeMs, 10);
                else if (typeof object.timeMs === "number")
                    message.timeMs = object.timeMs;
                else if (typeof object.timeMs === "object")
                    message.timeMs = new $util.LongBits(object.timeMs.low >>> 0, object.timeMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Pong
         * @static
         * @param {api.Pong} message Pong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeMs = options.longs === String ? "0" : 0;
            if (message.timeMs != null && message.hasOwnProperty("timeMs"))
                if (typeof message.timeMs === "number")
                    object.timeMs = options.longs === String ? String(message.timeMs) : message.timeMs;
                else
                    object.timeMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeMs) : options.longs === Number ? new $util.LongBits(message.timeMs.low >>> 0, message.timeMs.high >>> 0).toNumber(true) : message.timeMs;
            return object;
        };

        /**
         * Converts this Pong to JSON.
         * @function toJSON
         * @memberof api.Pong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pong
         * @function getTypeUrl
         * @memberof api.Pong
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Pong";
        };

        return Pong;
    })();

    api.ResSuccess = (function() {

        /**
         * Properties of a ResSuccess.
         * @memberof api
         * @interface IResSuccess
         * @property {number|null} [code] ResSuccess code
         */

        /**
         * Constructs a new ResSuccess.
         * @memberof api
         * @classdesc Represents a ResSuccess.
         * @implements IResSuccess
         * @constructor
         * @param {api.IResSuccess=} [properties] Properties to set
         */
        function ResSuccess(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResSuccess code.
         * @member {number} code
         * @memberof api.ResSuccess
         * @instance
         */
        ResSuccess.prototype.code = 0;

        /**
         * Creates a new ResSuccess instance using the specified properties.
         * @function create
         * @memberof api.ResSuccess
         * @static
         * @param {api.IResSuccess=} [properties] Properties to set
         * @returns {api.ResSuccess} ResSuccess instance
         */
        ResSuccess.create = function create(properties) {
            return new ResSuccess(properties);
        };

        /**
         * Encodes the specified ResSuccess message. Does not implicitly {@link api.ResSuccess.verify|verify} messages.
         * @function encode
         * @memberof api.ResSuccess
         * @static
         * @param {api.IResSuccess} message ResSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified ResSuccess message, length delimited. Does not implicitly {@link api.ResSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResSuccess
         * @static
         * @param {api.IResSuccess} message ResSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResSuccess} ResSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResSuccess();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
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
         * Decodes a ResSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResSuccess} ResSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResSuccess message.
         * @function verify
         * @memberof api.ResSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a ResSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResSuccess} ResSuccess
         */
        ResSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResSuccess)
                return object;
            let message = new $root.api.ResSuccess();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResSuccess
         * @static
         * @param {api.ResSuccess} message ResSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this ResSuccess to JSON.
         * @function toJSON
         * @memberof api.ResSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResSuccess
         * @function getTypeUrl
         * @memberof api.ResSuccess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResSuccess";
        };

        return ResSuccess;
    })();

    api.ResFail = (function() {

        /**
         * Properties of a ResFail.
         * @memberof api
         * @interface IResFail
         * @property {number|null} [code] ResFail code
         * @property {string|null} [msg] ResFail msg
         */

        /**
         * Constructs a new ResFail.
         * @memberof api
         * @classdesc Represents a ResFail.
         * @implements IResFail
         * @constructor
         * @param {api.IResFail=} [properties] Properties to set
         */
        function ResFail(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResFail code.
         * @member {number} code
         * @memberof api.ResFail
         * @instance
         */
        ResFail.prototype.code = 0;

        /**
         * ResFail msg.
         * @member {string} msg
         * @memberof api.ResFail
         * @instance
         */
        ResFail.prototype.msg = "";

        /**
         * Creates a new ResFail instance using the specified properties.
         * @function create
         * @memberof api.ResFail
         * @static
         * @param {api.IResFail=} [properties] Properties to set
         * @returns {api.ResFail} ResFail instance
         */
        ResFail.create = function create(properties) {
            return new ResFail(properties);
        };

        /**
         * Encodes the specified ResFail message. Does not implicitly {@link api.ResFail.verify|verify} messages.
         * @function encode
         * @memberof api.ResFail
         * @static
         * @param {api.IResFail} message ResFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResFail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ResFail message, length delimited. Does not implicitly {@link api.ResFail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResFail
         * @static
         * @param {api.IResFail} message ResFail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResFail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResFail message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResFail} ResFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResFail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResFail();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 3: {
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
         * Decodes a ResFail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResFail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResFail} ResFail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResFail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResFail message.
         * @function verify
         * @memberof api.ResFail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResFail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a ResFail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResFail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResFail} ResFail
         */
        ResFail.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResFail)
                return object;
            let message = new $root.api.ResFail();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a ResFail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResFail
         * @static
         * @param {api.ResFail} message ResFail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResFail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ResFail to JSON.
         * @function toJSON
         * @memberof api.ResFail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResFail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResFail
         * @function getTypeUrl
         * @memberof api.ResFail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResFail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResFail";
        };

        return ResFail;
    })();

    api.ReqIdentity = (function() {

        /**
         * Properties of a ReqIdentity.
         * @memberof api
         * @interface IReqIdentity
         * @property {string|null} [token] ReqIdentity token
         */

        /**
         * Constructs a new ReqIdentity.
         * @memberof api
         * @classdesc Represents a ReqIdentity.
         * @implements IReqIdentity
         * @constructor
         * @param {api.IReqIdentity=} [properties] Properties to set
         */
        function ReqIdentity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqIdentity token.
         * @member {string} token
         * @memberof api.ReqIdentity
         * @instance
         */
        ReqIdentity.prototype.token = "";

        /**
         * Creates a new ReqIdentity instance using the specified properties.
         * @function create
         * @memberof api.ReqIdentity
         * @static
         * @param {api.IReqIdentity=} [properties] Properties to set
         * @returns {api.ReqIdentity} ReqIdentity instance
         */
        ReqIdentity.create = function create(properties) {
            return new ReqIdentity(properties);
        };

        /**
         * Encodes the specified ReqIdentity message. Does not implicitly {@link api.ReqIdentity.verify|verify} messages.
         * @function encode
         * @memberof api.ReqIdentity
         * @static
         * @param {api.IReqIdentity} message ReqIdentity message or plain object to encode
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
         * Encodes the specified ReqIdentity message, length delimited. Does not implicitly {@link api.ReqIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqIdentity
         * @static
         * @param {api.IReqIdentity} message ReqIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqIdentity} ReqIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqIdentity();
            while (reader.pos < end) {
                let tag = reader.uint32();
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
         * @memberof api.ReqIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqIdentity} ReqIdentity
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
         * @memberof api.ReqIdentity
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
         * @memberof api.ReqIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqIdentity} ReqIdentity
         */
        ReqIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqIdentity)
                return object;
            let message = new $root.api.ReqIdentity();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a ReqIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqIdentity
         * @static
         * @param {api.ReqIdentity} message ReqIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this ReqIdentity to JSON.
         * @function toJSON
         * @memberof api.ReqIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqIdentity
         * @function getTypeUrl
         * @memberof api.ReqIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqIdentity";
        };

        return ReqIdentity;
    })();

    api.ResIdentity = (function() {

        /**
         * Properties of a ResIdentity.
         * @memberof api
         * @interface IResIdentity
         * @property {number|Long|null} [id] ResIdentity id
         * @property {string|null} [username] ResIdentity username
         * @property {string|null} [avatar] ResIdentity avatar
         */

        /**
         * Constructs a new ResIdentity.
         * @memberof api
         * @classdesc Represents a ResIdentity.
         * @implements IResIdentity
         * @constructor
         * @param {api.IResIdentity=} [properties] Properties to set
         */
        function ResIdentity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResIdentity id.
         * @member {number|Long} id
         * @memberof api.ResIdentity
         * @instance
         */
        ResIdentity.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResIdentity username.
         * @member {string} username
         * @memberof api.ResIdentity
         * @instance
         */
        ResIdentity.prototype.username = "";

        /**
         * ResIdentity avatar.
         * @member {string} avatar
         * @memberof api.ResIdentity
         * @instance
         */
        ResIdentity.prototype.avatar = "";

        /**
         * Creates a new ResIdentity instance using the specified properties.
         * @function create
         * @memberof api.ResIdentity
         * @static
         * @param {api.IResIdentity=} [properties] Properties to set
         * @returns {api.ResIdentity} ResIdentity instance
         */
        ResIdentity.create = function create(properties) {
            return new ResIdentity(properties);
        };

        /**
         * Encodes the specified ResIdentity message. Does not implicitly {@link api.ResIdentity.verify|verify} messages.
         * @function encode
         * @memberof api.ResIdentity
         * @static
         * @param {api.IResIdentity} message ResIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
            return writer;
        };

        /**
         * Encodes the specified ResIdentity message, length delimited. Does not implicitly {@link api.ResIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResIdentity
         * @static
         * @param {api.IResIdentity} message ResIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResIdentity} ResIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResIdentity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.id = reader.int64();
                        break;
                    }
                case 4: {
                        message.username = reader.string();
                        break;
                    }
                case 5: {
                        message.avatar = reader.string();
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
         * @memberof api.ResIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResIdentity} ResIdentity
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
         * @memberof api.ResIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            return null;
        };

        /**
         * Creates a ResIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResIdentity} ResIdentity
         */
        ResIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResIdentity)
                return object;
            let message = new $root.api.ResIdentity();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            return message;
        };

        /**
         * Creates a plain object from a ResIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResIdentity
         * @static
         * @param {api.ResIdentity} message ResIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.username = "";
                object.avatar = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            return object;
        };

        /**
         * Converts this ResIdentity to JSON.
         * @function toJSON
         * @memberof api.ResIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResIdentity
         * @function getTypeUrl
         * @memberof api.ResIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResIdentity";
        };

        return ResIdentity;
    })();

    api.ReqLobbyView = (function() {

        /**
         * Properties of a ReqLobbyView.
         * @memberof api
         * @interface IReqLobbyView
         */

        /**
         * Constructs a new ReqLobbyView.
         * @memberof api
         * @classdesc Represents a ReqLobbyView.
         * @implements IReqLobbyView
         * @constructor
         * @param {api.IReqLobbyView=} [properties] Properties to set
         */
        function ReqLobbyView(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqLobbyView instance using the specified properties.
         * @function create
         * @memberof api.ReqLobbyView
         * @static
         * @param {api.IReqLobbyView=} [properties] Properties to set
         * @returns {api.ReqLobbyView} ReqLobbyView instance
         */
        ReqLobbyView.create = function create(properties) {
            return new ReqLobbyView(properties);
        };

        /**
         * Encodes the specified ReqLobbyView message. Does not implicitly {@link api.ReqLobbyView.verify|verify} messages.
         * @function encode
         * @memberof api.ReqLobbyView
         * @static
         * @param {api.IReqLobbyView} message ReqLobbyView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLobbyView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqLobbyView message, length delimited. Does not implicitly {@link api.ReqLobbyView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqLobbyView
         * @static
         * @param {api.IReqLobbyView} message ReqLobbyView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLobbyView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLobbyView message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqLobbyView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqLobbyView} ReqLobbyView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLobbyView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqLobbyView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLobbyView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqLobbyView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqLobbyView} ReqLobbyView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLobbyView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLobbyView message.
         * @function verify
         * @memberof api.ReqLobbyView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLobbyView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqLobbyView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqLobbyView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqLobbyView} ReqLobbyView
         */
        ReqLobbyView.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqLobbyView)
                return object;
            return new $root.api.ReqLobbyView();
        };

        /**
         * Creates a plain object from a ReqLobbyView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqLobbyView
         * @static
         * @param {api.ReqLobbyView} message ReqLobbyView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLobbyView.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqLobbyView to JSON.
         * @function toJSON
         * @memberof api.ReqLobbyView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLobbyView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqLobbyView
         * @function getTypeUrl
         * @memberof api.ReqLobbyView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqLobbyView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqLobbyView";
        };

        return ReqLobbyView;
    })();

    api.ResLobbyView = (function() {

        /**
         * Properties of a ResLobbyView.
         * @memberof api
         * @interface IResLobbyView
         * @property {Array.<api.ILobbyTable>|null} [tables] ResLobbyView tables
         */

        /**
         * Constructs a new ResLobbyView.
         * @memberof api
         * @classdesc Represents a ResLobbyView.
         * @implements IResLobbyView
         * @constructor
         * @param {api.IResLobbyView=} [properties] Properties to set
         */
        function ResLobbyView(properties) {
            this.tables = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResLobbyView tables.
         * @member {Array.<api.ILobbyTable>} tables
         * @memberof api.ResLobbyView
         * @instance
         */
        ResLobbyView.prototype.tables = $util.emptyArray;

        /**
         * Creates a new ResLobbyView instance using the specified properties.
         * @function create
         * @memberof api.ResLobbyView
         * @static
         * @param {api.IResLobbyView=} [properties] Properties to set
         * @returns {api.ResLobbyView} ResLobbyView instance
         */
        ResLobbyView.create = function create(properties) {
            return new ResLobbyView(properties);
        };

        /**
         * Encodes the specified ResLobbyView message. Does not implicitly {@link api.ResLobbyView.verify|verify} messages.
         * @function encode
         * @memberof api.ResLobbyView
         * @static
         * @param {api.IResLobbyView} message ResLobbyView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResLobbyView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.api.LobbyTable.encode(message.tables[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResLobbyView message, length delimited. Does not implicitly {@link api.ResLobbyView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResLobbyView
         * @static
         * @param {api.IResLobbyView} message ResLobbyView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResLobbyView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResLobbyView message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResLobbyView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResLobbyView} ResLobbyView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResLobbyView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResLobbyView();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.api.LobbyTable.decode(reader, reader.uint32()));
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
         * Decodes a ResLobbyView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResLobbyView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResLobbyView} ResLobbyView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResLobbyView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResLobbyView message.
         * @function verify
         * @memberof api.ResLobbyView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResLobbyView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.api.LobbyTable.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResLobbyView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResLobbyView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResLobbyView} ResLobbyView
         */
        ResLobbyView.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResLobbyView)
                return object;
            let message = new $root.api.ResLobbyView();
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".api.ResLobbyView.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".api.ResLobbyView.tables: object expected");
                    message.tables[i] = $root.api.LobbyTable.fromObject(object.tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResLobbyView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResLobbyView
         * @static
         * @param {api.ResLobbyView} message ResLobbyView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResLobbyView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.api.LobbyTable.toObject(message.tables[j], options);
            }
            return object;
        };

        /**
         * Converts this ResLobbyView to JSON.
         * @function toJSON
         * @memberof api.ResLobbyView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResLobbyView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResLobbyView
         * @function getTypeUrl
         * @memberof api.ResLobbyView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResLobbyView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResLobbyView";
        };

        return ResLobbyView;
    })();

    api.LobbyTable = (function() {

        /**
         * Properties of a LobbyTable.
         * @memberof api
         * @interface ILobbyTable
         * @property {number|null} [tableNo] LobbyTable tableNo
         * @property {number|null} [playerNum] LobbyTable playerNum
         * @property {number|null} [robotNum] LobbyTable robotNum
         * @property {Array.<api.ILobbyPlayer>|null} [players] LobbyTable players
         */

        /**
         * Constructs a new LobbyTable.
         * @memberof api
         * @classdesc Represents a LobbyTable.
         * @implements ILobbyTable
         * @constructor
         * @param {api.ILobbyTable=} [properties] Properties to set
         */
        function LobbyTable(properties) {
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyTable tableNo.
         * @member {number} tableNo
         * @memberof api.LobbyTable
         * @instance
         */
        LobbyTable.prototype.tableNo = 0;

        /**
         * LobbyTable playerNum.
         * @member {number} playerNum
         * @memberof api.LobbyTable
         * @instance
         */
        LobbyTable.prototype.playerNum = 0;

        /**
         * LobbyTable robotNum.
         * @member {number} robotNum
         * @memberof api.LobbyTable
         * @instance
         */
        LobbyTable.prototype.robotNum = 0;

        /**
         * LobbyTable players.
         * @member {Array.<api.ILobbyPlayer>} players
         * @memberof api.LobbyTable
         * @instance
         */
        LobbyTable.prototype.players = $util.emptyArray;

        /**
         * Creates a new LobbyTable instance using the specified properties.
         * @function create
         * @memberof api.LobbyTable
         * @static
         * @param {api.ILobbyTable=} [properties] Properties to set
         * @returns {api.LobbyTable} LobbyTable instance
         */
        LobbyTable.create = function create(properties) {
            return new LobbyTable(properties);
        };

        /**
         * Encodes the specified LobbyTable message. Does not implicitly {@link api.LobbyTable.verify|verify} messages.
         * @function encode
         * @memberof api.LobbyTable
         * @static
         * @param {api.ILobbyTable} message LobbyTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableNo != null && Object.hasOwnProperty.call(message, "tableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableNo);
            if (message.playerNum != null && Object.hasOwnProperty.call(message, "playerNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerNum);
            if (message.robotNum != null && Object.hasOwnProperty.call(message, "robotNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.robotNum);
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.api.LobbyPlayer.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyTable message, length delimited. Does not implicitly {@link api.LobbyTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.LobbyTable
         * @static
         * @param {api.ILobbyTable} message LobbyTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.LobbyTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LobbyTable} LobbyTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LobbyTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableNo = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerNum = reader.int32();
                        break;
                    }
                case 3: {
                        message.robotNum = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.api.LobbyPlayer.decode(reader, reader.uint32()));
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
         * Decodes a LobbyTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.LobbyTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.LobbyTable} LobbyTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyTable message.
         * @function verify
         * @memberof api.LobbyTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                if (!$util.isInteger(message.tableNo))
                    return "tableNo: integer expected";
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                if (!$util.isInteger(message.playerNum))
                    return "playerNum: integer expected";
            if (message.robotNum != null && message.hasOwnProperty("robotNum"))
                if (!$util.isInteger(message.robotNum))
                    return "robotNum: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (let i = 0; i < message.players.length; ++i) {
                    let error = $root.api.LobbyPlayer.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.LobbyTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.LobbyTable} LobbyTable
         */
        LobbyTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.LobbyTable)
                return object;
            let message = new $root.api.LobbyTable();
            if (object.tableNo != null)
                message.tableNo = object.tableNo | 0;
            if (object.playerNum != null)
                message.playerNum = object.playerNum | 0;
            if (object.robotNum != null)
                message.robotNum = object.robotNum | 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".api.LobbyTable.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".api.LobbyTable.players: object expected");
                    message.players[i] = $root.api.LobbyPlayer.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.LobbyTable
         * @static
         * @param {api.LobbyTable} message LobbyTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.tableNo = 0;
                object.playerNum = 0;
                object.robotNum = 0;
            }
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                object.tableNo = message.tableNo;
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                object.playerNum = message.playerNum;
            if (message.robotNum != null && message.hasOwnProperty("robotNum"))
                object.robotNum = message.robotNum;
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.api.LobbyPlayer.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyTable to JSON.
         * @function toJSON
         * @memberof api.LobbyTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyTable
         * @function getTypeUrl
         * @memberof api.LobbyTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.LobbyTable";
        };

        return LobbyTable;
    })();

    api.LobbyPlayer = (function() {

        /**
         * Properties of a LobbyPlayer.
         * @memberof api
         * @interface ILobbyPlayer
         * @property {boolean|null} [robot] LobbyPlayer robot
         * @property {number|Long|null} [id] LobbyPlayer id
         * @property {string|null} [username] LobbyPlayer username
         * @property {string|null} [avatar] LobbyPlayer avatar
         */

        /**
         * Constructs a new LobbyPlayer.
         * @memberof api
         * @classdesc Represents a LobbyPlayer.
         * @implements ILobbyPlayer
         * @constructor
         * @param {api.ILobbyPlayer=} [properties] Properties to set
         */
        function LobbyPlayer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyPlayer robot.
         * @member {boolean} robot
         * @memberof api.LobbyPlayer
         * @instance
         */
        LobbyPlayer.prototype.robot = false;

        /**
         * LobbyPlayer id.
         * @member {number|Long} id
         * @memberof api.LobbyPlayer
         * @instance
         */
        LobbyPlayer.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LobbyPlayer username.
         * @member {string} username
         * @memberof api.LobbyPlayer
         * @instance
         */
        LobbyPlayer.prototype.username = "";

        /**
         * LobbyPlayer avatar.
         * @member {string} avatar
         * @memberof api.LobbyPlayer
         * @instance
         */
        LobbyPlayer.prototype.avatar = "";

        /**
         * Creates a new LobbyPlayer instance using the specified properties.
         * @function create
         * @memberof api.LobbyPlayer
         * @static
         * @param {api.ILobbyPlayer=} [properties] Properties to set
         * @returns {api.LobbyPlayer} LobbyPlayer instance
         */
        LobbyPlayer.create = function create(properties) {
            return new LobbyPlayer(properties);
        };

        /**
         * Encodes the specified LobbyPlayer message. Does not implicitly {@link api.LobbyPlayer.verify|verify} messages.
         * @function encode
         * @memberof api.LobbyPlayer
         * @static
         * @param {api.ILobbyPlayer} message LobbyPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.robot != null && Object.hasOwnProperty.call(message, "robot"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.robot);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            return writer;
        };

        /**
         * Encodes the specified LobbyPlayer message, length delimited. Does not implicitly {@link api.LobbyPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.LobbyPlayer
         * @static
         * @param {api.ILobbyPlayer} message LobbyPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof api.LobbyPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.LobbyPlayer} LobbyPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.LobbyPlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.robot = reader.bool();
                        break;
                    }
                case 2: {
                        message.id = reader.int64();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                case 4: {
                        message.avatar = reader.string();
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
         * Decodes a LobbyPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.LobbyPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.LobbyPlayer} LobbyPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyPlayer message.
         * @function verify
         * @memberof api.LobbyPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.robot != null && message.hasOwnProperty("robot"))
                if (typeof message.robot !== "boolean")
                    return "robot: boolean expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            return null;
        };

        /**
         * Creates a LobbyPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.LobbyPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.LobbyPlayer} LobbyPlayer
         */
        LobbyPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.api.LobbyPlayer)
                return object;
            let message = new $root.api.LobbyPlayer();
            if (object.robot != null)
                message.robot = Boolean(object.robot);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            return message;
        };

        /**
         * Creates a plain object from a LobbyPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.LobbyPlayer
         * @static
         * @param {api.LobbyPlayer} message LobbyPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.robot = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.username = "";
                object.avatar = "";
            }
            if (message.robot != null && message.hasOwnProperty("robot"))
                object.robot = message.robot;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            return object;
        };

        /**
         * Converts this LobbyPlayer to JSON.
         * @function toJSON
         * @memberof api.LobbyPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyPlayer
         * @function getTypeUrl
         * @memberof api.LobbyPlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyPlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.LobbyPlayer";
        };

        return LobbyPlayer;
    })();

    api.ReqCreateTable = (function() {

        /**
         * Properties of a ReqCreateTable.
         * @memberof api
         * @interface IReqCreateTable
         * @property {number|null} [players] ReqCreateTable players
         * @property {number|null} [robots] ReqCreateTable robots
         */

        /**
         * Constructs a new ReqCreateTable.
         * @memberof api
         * @classdesc Represents a ReqCreateTable.
         * @implements IReqCreateTable
         * @constructor
         * @param {api.IReqCreateTable=} [properties] Properties to set
         */
        function ReqCreateTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCreateTable players.
         * @member {number} players
         * @memberof api.ReqCreateTable
         * @instance
         */
        ReqCreateTable.prototype.players = 0;

        /**
         * ReqCreateTable robots.
         * @member {number} robots
         * @memberof api.ReqCreateTable
         * @instance
         */
        ReqCreateTable.prototype.robots = 0;

        /**
         * Creates a new ReqCreateTable instance using the specified properties.
         * @function create
         * @memberof api.ReqCreateTable
         * @static
         * @param {api.IReqCreateTable=} [properties] Properties to set
         * @returns {api.ReqCreateTable} ReqCreateTable instance
         */
        ReqCreateTable.create = function create(properties) {
            return new ReqCreateTable(properties);
        };

        /**
         * Encodes the specified ReqCreateTable message. Does not implicitly {@link api.ReqCreateTable.verify|verify} messages.
         * @function encode
         * @memberof api.ReqCreateTable
         * @static
         * @param {api.IReqCreateTable} message ReqCreateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreateTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.players);
            if (message.robots != null && Object.hasOwnProperty.call(message, "robots"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.robots);
            return writer;
        };

        /**
         * Encodes the specified ReqCreateTable message, length delimited. Does not implicitly {@link api.ReqCreateTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqCreateTable
         * @static
         * @param {api.IReqCreateTable} message ReqCreateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCreateTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqCreateTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqCreateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqCreateTable} ReqCreateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreateTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqCreateTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.players = reader.int32();
                        break;
                    }
                case 2: {
                        message.robots = reader.int32();
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
         * Decodes a ReqCreateTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqCreateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqCreateTable} ReqCreateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCreateTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqCreateTable message.
         * @function verify
         * @memberof api.ReqCreateTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqCreateTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players"))
                if (!$util.isInteger(message.players))
                    return "players: integer expected";
            if (message.robots != null && message.hasOwnProperty("robots"))
                if (!$util.isInteger(message.robots))
                    return "robots: integer expected";
            return null;
        };

        /**
         * Creates a ReqCreateTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqCreateTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqCreateTable} ReqCreateTable
         */
        ReqCreateTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqCreateTable)
                return object;
            let message = new $root.api.ReqCreateTable();
            if (object.players != null)
                message.players = object.players | 0;
            if (object.robots != null)
                message.robots = object.robots | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqCreateTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqCreateTable
         * @static
         * @param {api.ReqCreateTable} message ReqCreateTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCreateTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.players = 0;
                object.robots = 0;
            }
            if (message.players != null && message.hasOwnProperty("players"))
                object.players = message.players;
            if (message.robots != null && message.hasOwnProperty("robots"))
                object.robots = message.robots;
            return object;
        };

        /**
         * Converts this ReqCreateTable to JSON.
         * @function toJSON
         * @memberof api.ReqCreateTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCreateTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqCreateTable
         * @function getTypeUrl
         * @memberof api.ReqCreateTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqCreateTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqCreateTable";
        };

        return ReqCreateTable;
    })();

    api.ResCreateTable = (function() {

        /**
         * Properties of a ResCreateTable.
         * @memberof api
         * @interface IResCreateTable
         * @property {number|null} [tableNo] ResCreateTable tableNo
         */

        /**
         * Constructs a new ResCreateTable.
         * @memberof api
         * @classdesc Represents a ResCreateTable.
         * @implements IResCreateTable
         * @constructor
         * @param {api.IResCreateTable=} [properties] Properties to set
         */
        function ResCreateTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResCreateTable tableNo.
         * @member {number} tableNo
         * @memberof api.ResCreateTable
         * @instance
         */
        ResCreateTable.prototype.tableNo = 0;

        /**
         * Creates a new ResCreateTable instance using the specified properties.
         * @function create
         * @memberof api.ResCreateTable
         * @static
         * @param {api.IResCreateTable=} [properties] Properties to set
         * @returns {api.ResCreateTable} ResCreateTable instance
         */
        ResCreateTable.create = function create(properties) {
            return new ResCreateTable(properties);
        };

        /**
         * Encodes the specified ResCreateTable message. Does not implicitly {@link api.ResCreateTable.verify|verify} messages.
         * @function encode
         * @memberof api.ResCreateTable
         * @static
         * @param {api.IResCreateTable} message ResCreateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCreateTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableNo != null && Object.hasOwnProperty.call(message, "tableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableNo);
            return writer;
        };

        /**
         * Encodes the specified ResCreateTable message, length delimited. Does not implicitly {@link api.ResCreateTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResCreateTable
         * @static
         * @param {api.IResCreateTable} message ResCreateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCreateTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResCreateTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResCreateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResCreateTable} ResCreateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCreateTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResCreateTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableNo = reader.int32();
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
         * Decodes a ResCreateTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResCreateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResCreateTable} ResCreateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCreateTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResCreateTable message.
         * @function verify
         * @memberof api.ResCreateTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResCreateTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                if (!$util.isInteger(message.tableNo))
                    return "tableNo: integer expected";
            return null;
        };

        /**
         * Creates a ResCreateTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResCreateTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResCreateTable} ResCreateTable
         */
        ResCreateTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResCreateTable)
                return object;
            let message = new $root.api.ResCreateTable();
            if (object.tableNo != null)
                message.tableNo = object.tableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResCreateTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResCreateTable
         * @static
         * @param {api.ResCreateTable} message ResCreateTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResCreateTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.tableNo = 0;
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                object.tableNo = message.tableNo;
            return object;
        };

        /**
         * Converts this ResCreateTable to JSON.
         * @function toJSON
         * @memberof api.ResCreateTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResCreateTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResCreateTable
         * @function getTypeUrl
         * @memberof api.ResCreateTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResCreateTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResCreateTable";
        };

        return ResCreateTable;
    })();

    api.ReqJoinTable = (function() {

        /**
         * Properties of a ReqJoinTable.
         * @memberof api
         * @interface IReqJoinTable
         * @property {number|null} [tableNo] ReqJoinTable tableNo
         */

        /**
         * Constructs a new ReqJoinTable.
         * @memberof api
         * @classdesc Represents a ReqJoinTable.
         * @implements IReqJoinTable
         * @constructor
         * @param {api.IReqJoinTable=} [properties] Properties to set
         */
        function ReqJoinTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqJoinTable tableNo.
         * @member {number} tableNo
         * @memberof api.ReqJoinTable
         * @instance
         */
        ReqJoinTable.prototype.tableNo = 0;

        /**
         * Creates a new ReqJoinTable instance using the specified properties.
         * @function create
         * @memberof api.ReqJoinTable
         * @static
         * @param {api.IReqJoinTable=} [properties] Properties to set
         * @returns {api.ReqJoinTable} ReqJoinTable instance
         */
        ReqJoinTable.create = function create(properties) {
            return new ReqJoinTable(properties);
        };

        /**
         * Encodes the specified ReqJoinTable message. Does not implicitly {@link api.ReqJoinTable.verify|verify} messages.
         * @function encode
         * @memberof api.ReqJoinTable
         * @static
         * @param {api.IReqJoinTable} message ReqJoinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableNo != null && Object.hasOwnProperty.call(message, "tableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableNo);
            return writer;
        };

        /**
         * Encodes the specified ReqJoinTable message, length delimited. Does not implicitly {@link api.ReqJoinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqJoinTable
         * @static
         * @param {api.IReqJoinTable} message ReqJoinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqJoinTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqJoinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqJoinTable} ReqJoinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqJoinTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableNo = reader.int32();
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
         * Decodes a ReqJoinTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqJoinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqJoinTable} ReqJoinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqJoinTable message.
         * @function verify
         * @memberof api.ReqJoinTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqJoinTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                if (!$util.isInteger(message.tableNo))
                    return "tableNo: integer expected";
            return null;
        };

        /**
         * Creates a ReqJoinTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqJoinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqJoinTable} ReqJoinTable
         */
        ReqJoinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqJoinTable)
                return object;
            let message = new $root.api.ReqJoinTable();
            if (object.tableNo != null)
                message.tableNo = object.tableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqJoinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqJoinTable
         * @static
         * @param {api.ReqJoinTable} message ReqJoinTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqJoinTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.tableNo = 0;
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                object.tableNo = message.tableNo;
            return object;
        };

        /**
         * Converts this ReqJoinTable to JSON.
         * @function toJSON
         * @memberof api.ReqJoinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqJoinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqJoinTable
         * @function getTypeUrl
         * @memberof api.ReqJoinTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqJoinTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqJoinTable";
        };

        return ReqJoinTable;
    })();

    api.ReqLeaveTable = (function() {

        /**
         * Properties of a ReqLeaveTable.
         * @memberof api
         * @interface IReqLeaveTable
         */

        /**
         * Constructs a new ReqLeaveTable.
         * @memberof api
         * @classdesc Represents a ReqLeaveTable.
         * @implements IReqLeaveTable
         * @constructor
         * @param {api.IReqLeaveTable=} [properties] Properties to set
         */
        function ReqLeaveTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqLeaveTable instance using the specified properties.
         * @function create
         * @memberof api.ReqLeaveTable
         * @static
         * @param {api.IReqLeaveTable=} [properties] Properties to set
         * @returns {api.ReqLeaveTable} ReqLeaveTable instance
         */
        ReqLeaveTable.create = function create(properties) {
            return new ReqLeaveTable(properties);
        };

        /**
         * Encodes the specified ReqLeaveTable message. Does not implicitly {@link api.ReqLeaveTable.verify|verify} messages.
         * @function encode
         * @memberof api.ReqLeaveTable
         * @static
         * @param {api.IReqLeaveTable} message ReqLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqLeaveTable message, length delimited. Does not implicitly {@link api.ReqLeaveTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqLeaveTable
         * @static
         * @param {api.IReqLeaveTable} message ReqLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqLeaveTable} ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqLeaveTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqLeaveTable} ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLeaveTable message.
         * @function verify
         * @memberof api.ReqLeaveTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLeaveTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqLeaveTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqLeaveTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqLeaveTable} ReqLeaveTable
         */
        ReqLeaveTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqLeaveTable)
                return object;
            return new $root.api.ReqLeaveTable();
        };

        /**
         * Creates a plain object from a ReqLeaveTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqLeaveTable
         * @static
         * @param {api.ReqLeaveTable} message ReqLeaveTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqLeaveTable.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqLeaveTable to JSON.
         * @function toJSON
         * @memberof api.ReqLeaveTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqLeaveTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqLeaveTable
         * @function getTypeUrl
         * @memberof api.ReqLeaveTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqLeaveTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqLeaveTable";
        };

        return ReqLeaveTable;
    })();

    api.ReqReadyStart = (function() {

        /**
         * Properties of a ReqReadyStart.
         * @memberof api
         * @interface IReqReadyStart
         */

        /**
         * Constructs a new ReqReadyStart.
         * @memberof api
         * @classdesc Represents a ReqReadyStart.
         * @implements IReqReadyStart
         * @constructor
         * @param {api.IReqReadyStart=} [properties] Properties to set
         */
        function ReqReadyStart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqReadyStart instance using the specified properties.
         * @function create
         * @memberof api.ReqReadyStart
         * @static
         * @param {api.IReqReadyStart=} [properties] Properties to set
         * @returns {api.ReqReadyStart} ReqReadyStart instance
         */
        ReqReadyStart.create = function create(properties) {
            return new ReqReadyStart(properties);
        };

        /**
         * Encodes the specified ReqReadyStart message. Does not implicitly {@link api.ReqReadyStart.verify|verify} messages.
         * @function encode
         * @memberof api.ReqReadyStart
         * @static
         * @param {api.IReqReadyStart} message ReqReadyStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReadyStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqReadyStart message, length delimited. Does not implicitly {@link api.ReqReadyStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqReadyStart
         * @static
         * @param {api.IReqReadyStart} message ReqReadyStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReadyStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqReadyStart message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqReadyStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqReadyStart} ReqReadyStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReadyStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqReadyStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqReadyStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqReadyStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqReadyStart} ReqReadyStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReadyStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqReadyStart message.
         * @function verify
         * @memberof api.ReqReadyStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqReadyStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqReadyStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqReadyStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqReadyStart} ReqReadyStart
         */
        ReqReadyStart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqReadyStart)
                return object;
            return new $root.api.ReqReadyStart();
        };

        /**
         * Creates a plain object from a ReqReadyStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqReadyStart
         * @static
         * @param {api.ReqReadyStart} message ReqReadyStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqReadyStart.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqReadyStart to JSON.
         * @function toJSON
         * @memberof api.ReqReadyStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqReadyStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqReadyStart
         * @function getTypeUrl
         * @memberof api.ReqReadyStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqReadyStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqReadyStart";
        };

        return ReqReadyStart;
    })();

    api.ReqCancelReady = (function() {

        /**
         * Properties of a ReqCancelReady.
         * @memberof api
         * @interface IReqCancelReady
         */

        /**
         * Constructs a new ReqCancelReady.
         * @memberof api
         * @classdesc Represents a ReqCancelReady.
         * @implements IReqCancelReady
         * @constructor
         * @param {api.IReqCancelReady=} [properties] Properties to set
         */
        function ReqCancelReady(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqCancelReady instance using the specified properties.
         * @function create
         * @memberof api.ReqCancelReady
         * @static
         * @param {api.IReqCancelReady=} [properties] Properties to set
         * @returns {api.ReqCancelReady} ReqCancelReady instance
         */
        ReqCancelReady.create = function create(properties) {
            return new ReqCancelReady(properties);
        };

        /**
         * Encodes the specified ReqCancelReady message. Does not implicitly {@link api.ReqCancelReady.verify|verify} messages.
         * @function encode
         * @memberof api.ReqCancelReady
         * @static
         * @param {api.IReqCancelReady} message ReqCancelReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCancelReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqCancelReady message, length delimited. Does not implicitly {@link api.ReqCancelReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqCancelReady
         * @static
         * @param {api.IReqCancelReady} message ReqCancelReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCancelReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqCancelReady message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqCancelReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqCancelReady} ReqCancelReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCancelReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqCancelReady();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqCancelReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqCancelReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqCancelReady} ReqCancelReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCancelReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqCancelReady message.
         * @function verify
         * @memberof api.ReqCancelReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqCancelReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqCancelReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqCancelReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqCancelReady} ReqCancelReady
         */
        ReqCancelReady.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqCancelReady)
                return object;
            return new $root.api.ReqCancelReady();
        };

        /**
         * Creates a plain object from a ReqCancelReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqCancelReady
         * @static
         * @param {api.ReqCancelReady} message ReqCancelReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCancelReady.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqCancelReady to JSON.
         * @function toJSON
         * @memberof api.ReqCancelReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCancelReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqCancelReady
         * @function getTypeUrl
         * @memberof api.ReqCancelReady
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqCancelReady.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqCancelReady";
        };

        return ReqCancelReady;
    })();

    api.ReqKickOutTable = (function() {

        /**
         * Properties of a ReqKickOutTable.
         * @memberof api
         * @interface IReqKickOutTable
         * @property {number|Long|null} [playerId] ReqKickOutTable playerId
         */

        /**
         * Constructs a new ReqKickOutTable.
         * @memberof api
         * @classdesc Represents a ReqKickOutTable.
         * @implements IReqKickOutTable
         * @constructor
         * @param {api.IReqKickOutTable=} [properties] Properties to set
         */
        function ReqKickOutTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqKickOutTable playerId.
         * @member {number|Long} playerId
         * @memberof api.ReqKickOutTable
         * @instance
         */
        ReqKickOutTable.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqKickOutTable instance using the specified properties.
         * @function create
         * @memberof api.ReqKickOutTable
         * @static
         * @param {api.IReqKickOutTable=} [properties] Properties to set
         * @returns {api.ReqKickOutTable} ReqKickOutTable instance
         */
        ReqKickOutTable.create = function create(properties) {
            return new ReqKickOutTable(properties);
        };

        /**
         * Encodes the specified ReqKickOutTable message. Does not implicitly {@link api.ReqKickOutTable.verify|verify} messages.
         * @function encode
         * @memberof api.ReqKickOutTable
         * @static
         * @param {api.IReqKickOutTable} message ReqKickOutTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqKickOutTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified ReqKickOutTable message, length delimited. Does not implicitly {@link api.ReqKickOutTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqKickOutTable
         * @static
         * @param {api.IReqKickOutTable} message ReqKickOutTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqKickOutTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqKickOutTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqKickOutTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqKickOutTable} ReqKickOutTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqKickOutTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqKickOutTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int64();
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
         * Decodes a ReqKickOutTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqKickOutTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqKickOutTable} ReqKickOutTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqKickOutTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqKickOutTable message.
         * @function verify
         * @memberof api.ReqKickOutTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqKickOutTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReqKickOutTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqKickOutTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqKickOutTable} ReqKickOutTable
         */
        ReqKickOutTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqKickOutTable)
                return object;
            let message = new $root.api.ReqKickOutTable();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReqKickOutTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqKickOutTable
         * @static
         * @param {api.ReqKickOutTable} message ReqKickOutTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqKickOutTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
        };

        /**
         * Converts this ReqKickOutTable to JSON.
         * @function toJSON
         * @memberof api.ReqKickOutTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqKickOutTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqKickOutTable
         * @function getTypeUrl
         * @memberof api.ReqKickOutTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqKickOutTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqKickOutTable";
        };

        return ReqKickOutTable;
    })();

    api.ResKickOutTable = (function() {

        /**
         * Properties of a ResKickOutTable.
         * @memberof api
         * @interface IResKickOutTable
         */

        /**
         * Constructs a new ResKickOutTable.
         * @memberof api
         * @classdesc Represents a ResKickOutTable.
         * @implements IResKickOutTable
         * @constructor
         * @param {api.IResKickOutTable=} [properties] Properties to set
         */
        function ResKickOutTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResKickOutTable instance using the specified properties.
         * @function create
         * @memberof api.ResKickOutTable
         * @static
         * @param {api.IResKickOutTable=} [properties] Properties to set
         * @returns {api.ResKickOutTable} ResKickOutTable instance
         */
        ResKickOutTable.create = function create(properties) {
            return new ResKickOutTable(properties);
        };

        /**
         * Encodes the specified ResKickOutTable message. Does not implicitly {@link api.ResKickOutTable.verify|verify} messages.
         * @function encode
         * @memberof api.ResKickOutTable
         * @static
         * @param {api.IResKickOutTable} message ResKickOutTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResKickOutTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResKickOutTable message, length delimited. Does not implicitly {@link api.ResKickOutTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResKickOutTable
         * @static
         * @param {api.IResKickOutTable} message ResKickOutTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResKickOutTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResKickOutTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResKickOutTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResKickOutTable} ResKickOutTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResKickOutTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResKickOutTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResKickOutTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResKickOutTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResKickOutTable} ResKickOutTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResKickOutTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResKickOutTable message.
         * @function verify
         * @memberof api.ResKickOutTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResKickOutTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResKickOutTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResKickOutTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResKickOutTable} ResKickOutTable
         */
        ResKickOutTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResKickOutTable)
                return object;
            return new $root.api.ResKickOutTable();
        };

        /**
         * Creates a plain object from a ResKickOutTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResKickOutTable
         * @static
         * @param {api.ResKickOutTable} message ResKickOutTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResKickOutTable.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResKickOutTable to JSON.
         * @function toJSON
         * @memberof api.ResKickOutTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResKickOutTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResKickOutTable
         * @function getTypeUrl
         * @memberof api.ResKickOutTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResKickOutTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResKickOutTable";
        };

        return ResKickOutTable;
    })();

    api.ReqGameAction = (function() {

        /**
         * Properties of a ReqGameAction.
         * @memberof api
         * @interface IReqGameAction
         * @property {number|null} [action] ReqGameAction action
         * @property {number|null} [chip] ReqGameAction chip
         */

        /**
         * Constructs a new ReqGameAction.
         * @memberof api
         * @classdesc Represents a ReqGameAction.
         * @implements IReqGameAction
         * @constructor
         * @param {api.IReqGameAction=} [properties] Properties to set
         */
        function ReqGameAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqGameAction action.
         * @member {number} action
         * @memberof api.ReqGameAction
         * @instance
         */
        ReqGameAction.prototype.action = 0;

        /**
         * ReqGameAction chip.
         * @member {number} chip
         * @memberof api.ReqGameAction
         * @instance
         */
        ReqGameAction.prototype.chip = 0;

        /**
         * Creates a new ReqGameAction instance using the specified properties.
         * @function create
         * @memberof api.ReqGameAction
         * @static
         * @param {api.IReqGameAction=} [properties] Properties to set
         * @returns {api.ReqGameAction} ReqGameAction instance
         */
        ReqGameAction.create = function create(properties) {
            return new ReqGameAction(properties);
        };

        /**
         * Encodes the specified ReqGameAction message. Does not implicitly {@link api.ReqGameAction.verify|verify} messages.
         * @function encode
         * @memberof api.ReqGameAction
         * @static
         * @param {api.IReqGameAction} message ReqGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chip);
            return writer;
        };

        /**
         * Encodes the specified ReqGameAction message, length delimited. Does not implicitly {@link api.ReqGameAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqGameAction
         * @static
         * @param {api.IReqGameAction} message ReqGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameAction message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqGameAction} ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqGameAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                case 2: {
                        message.chip = reader.int32();
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
         * Decodes a ReqGameAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqGameAction} ReqGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameAction message.
         * @function verify
         * @memberof api.ReqGameAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isInteger(message.action))
                    return "action: integer expected";
            if (message.chip != null && message.hasOwnProperty("chip"))
                if (!$util.isInteger(message.chip))
                    return "chip: integer expected";
            return null;
        };

        /**
         * Creates a ReqGameAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqGameAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqGameAction} ReqGameAction
         */
        ReqGameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqGameAction)
                return object;
            let message = new $root.api.ReqGameAction();
            if (object.action != null)
                message.action = object.action | 0;
            if (object.chip != null)
                message.chip = object.chip | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqGameAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqGameAction
         * @static
         * @param {api.ReqGameAction} message ReqGameAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.action = 0;
                object.chip = 0;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.chip != null && message.hasOwnProperty("chip"))
                object.chip = message.chip;
            return object;
        };

        /**
         * Converts this ReqGameAction to JSON.
         * @function toJSON
         * @memberof api.ReqGameAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqGameAction
         * @function getTypeUrl
         * @memberof api.ReqGameAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqGameAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqGameAction";
        };

        return ReqGameAction;
    })();

    api.ResGameAction = (function() {

        /**
         * Properties of a ResGameAction.
         * @memberof api
         * @interface IResGameAction
         */

        /**
         * Constructs a new ResGameAction.
         * @memberof api
         * @classdesc Represents a ResGameAction.
         * @implements IResGameAction
         * @constructor
         * @param {api.IResGameAction=} [properties] Properties to set
         */
        function ResGameAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResGameAction instance using the specified properties.
         * @function create
         * @memberof api.ResGameAction
         * @static
         * @param {api.IResGameAction=} [properties] Properties to set
         * @returns {api.ResGameAction} ResGameAction instance
         */
        ResGameAction.create = function create(properties) {
            return new ResGameAction(properties);
        };

        /**
         * Encodes the specified ResGameAction message. Does not implicitly {@link api.ResGameAction.verify|verify} messages.
         * @function encode
         * @memberof api.ResGameAction
         * @static
         * @param {api.IResGameAction} message ResGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResGameAction message, length delimited. Does not implicitly {@link api.ResGameAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResGameAction
         * @static
         * @param {api.IResGameAction} message ResGameAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResGameAction message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResGameAction} ResGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResGameAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResGameAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResGameAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResGameAction} ResGameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResGameAction message.
         * @function verify
         * @memberof api.ResGameAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResGameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResGameAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResGameAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResGameAction} ResGameAction
         */
        ResGameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResGameAction)
                return object;
            return new $root.api.ResGameAction();
        };

        /**
         * Creates a plain object from a ResGameAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResGameAction
         * @static
         * @param {api.ResGameAction} message ResGameAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResGameAction.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResGameAction to JSON.
         * @function toJSON
         * @memberof api.ResGameAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResGameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResGameAction
         * @function getTypeUrl
         * @memberof api.ResGameAction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResGameAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResGameAction";
        };

        return ResGameAction;
    })();

    api.ReqGameFullStatus = (function() {

        /**
         * Properties of a ReqGameFullStatus.
         * @memberof api
         * @interface IReqGameFullStatus
         */

        /**
         * Constructs a new ReqGameFullStatus.
         * @memberof api
         * @classdesc Represents a ReqGameFullStatus.
         * @implements IReqGameFullStatus
         * @constructor
         * @param {api.IReqGameFullStatus=} [properties] Properties to set
         */
        function ReqGameFullStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqGameFullStatus instance using the specified properties.
         * @function create
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {api.IReqGameFullStatus=} [properties] Properties to set
         * @returns {api.ReqGameFullStatus} ReqGameFullStatus instance
         */
        ReqGameFullStatus.create = function create(properties) {
            return new ReqGameFullStatus(properties);
        };

        /**
         * Encodes the specified ReqGameFullStatus message. Does not implicitly {@link api.ReqGameFullStatus.verify|verify} messages.
         * @function encode
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {api.IReqGameFullStatus} message ReqGameFullStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameFullStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqGameFullStatus message, length delimited. Does not implicitly {@link api.ReqGameFullStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {api.IReqGameFullStatus} message ReqGameFullStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameFullStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameFullStatus message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqGameFullStatus} ReqGameFullStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameFullStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqGameFullStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqGameFullStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqGameFullStatus} ReqGameFullStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameFullStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameFullStatus message.
         * @function verify
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameFullStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqGameFullStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqGameFullStatus} ReqGameFullStatus
         */
        ReqGameFullStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqGameFullStatus)
                return object;
            return new $root.api.ReqGameFullStatus();
        };

        /**
         * Creates a plain object from a ReqGameFullStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {api.ReqGameFullStatus} message ReqGameFullStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameFullStatus.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqGameFullStatus to JSON.
         * @function toJSON
         * @memberof api.ReqGameFullStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameFullStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqGameFullStatus
         * @function getTypeUrl
         * @memberof api.ReqGameFullStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqGameFullStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqGameFullStatus";
        };

        return ReqGameFullStatus;
    })();

    api.ResGameFullStatus = (function() {

        /**
         * Properties of a ResGameFullStatus.
         * @memberof api
         * @interface IResGameFullStatus
         * @property {boolean|null} [inGame] ResGameFullStatus inGame
         * @property {number|null} [tableNo] ResGameFullStatus tableNo
         * @property {number|null} [gameStage] ResGameFullStatus gameStage
         * @property {number|null} [chip] ResGameFullStatus chip
         * @property {number|null} [roundTimes] ResGameFullStatus roundTimes
         * @property {number|Long|null} [playerId] ResGameFullStatus playerId
         * @property {number|null} [bigBlindPos] ResGameFullStatus bigBlindPos
         * @property {number|null} [smallBlindPos] ResGameFullStatus smallBlindPos
         * @property {Array.<api.ICard>|null} [publicCard] ResGameFullStatus publicCard
         * @property {Array.<api.ITablePlayer>|null} [players] ResGameFullStatus players
         */

        /**
         * Constructs a new ResGameFullStatus.
         * @memberof api
         * @classdesc Represents a ResGameFullStatus.
         * @implements IResGameFullStatus
         * @constructor
         * @param {api.IResGameFullStatus=} [properties] Properties to set
         */
        function ResGameFullStatus(properties) {
            this.publicCard = [];
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResGameFullStatus inGame.
         * @member {boolean} inGame
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.inGame = false;

        /**
         * ResGameFullStatus tableNo.
         * @member {number} tableNo
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.tableNo = 0;

        /**
         * ResGameFullStatus gameStage.
         * @member {number} gameStage
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.gameStage = 0;

        /**
         * ResGameFullStatus chip.
         * @member {number} chip
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.chip = 0;

        /**
         * ResGameFullStatus roundTimes.
         * @member {number} roundTimes
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.roundTimes = 0;

        /**
         * ResGameFullStatus playerId.
         * @member {number|Long} playerId
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResGameFullStatus bigBlindPos.
         * @member {number} bigBlindPos
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.bigBlindPos = 0;

        /**
         * ResGameFullStatus smallBlindPos.
         * @member {number} smallBlindPos
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.smallBlindPos = 0;

        /**
         * ResGameFullStatus publicCard.
         * @member {Array.<api.ICard>} publicCard
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.publicCard = $util.emptyArray;

        /**
         * ResGameFullStatus players.
         * @member {Array.<api.ITablePlayer>} players
         * @memberof api.ResGameFullStatus
         * @instance
         */
        ResGameFullStatus.prototype.players = $util.emptyArray;

        /**
         * Creates a new ResGameFullStatus instance using the specified properties.
         * @function create
         * @memberof api.ResGameFullStatus
         * @static
         * @param {api.IResGameFullStatus=} [properties] Properties to set
         * @returns {api.ResGameFullStatus} ResGameFullStatus instance
         */
        ResGameFullStatus.create = function create(properties) {
            return new ResGameFullStatus(properties);
        };

        /**
         * Encodes the specified ResGameFullStatus message. Does not implicitly {@link api.ResGameFullStatus.verify|verify} messages.
         * @function encode
         * @memberof api.ResGameFullStatus
         * @static
         * @param {api.IResGameFullStatus} message ResGameFullStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameFullStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inGame != null && Object.hasOwnProperty.call(message, "inGame"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.inGame);
            if (message.tableNo != null && Object.hasOwnProperty.call(message, "tableNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableNo);
            if (message.gameStage != null && Object.hasOwnProperty.call(message, "gameStage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameStage);
            if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.chip);
            if (message.roundTimes != null && Object.hasOwnProperty.call(message, "roundTimes"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roundTimes);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.playerId);
            if (message.bigBlindPos != null && Object.hasOwnProperty.call(message, "bigBlindPos"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.bigBlindPos);
            if (message.smallBlindPos != null && Object.hasOwnProperty.call(message, "smallBlindPos"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.smallBlindPos);
            if (message.publicCard != null && message.publicCard.length)
                for (let i = 0; i < message.publicCard.length; ++i)
                    $root.api.Card.encode(message.publicCard[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.api.TablePlayer.encode(message.players[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResGameFullStatus message, length delimited. Does not implicitly {@link api.ResGameFullStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResGameFullStatus
         * @static
         * @param {api.IResGameFullStatus} message ResGameFullStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameFullStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResGameFullStatus message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResGameFullStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResGameFullStatus} ResGameFullStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameFullStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResGameFullStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.inGame = reader.bool();
                        break;
                    }
                case 2: {
                        message.tableNo = reader.int32();
                        break;
                    }
                case 3: {
                        message.gameStage = reader.int32();
                        break;
                    }
                case 4: {
                        message.chip = reader.int32();
                        break;
                    }
                case 5: {
                        message.roundTimes = reader.int32();
                        break;
                    }
                case 6: {
                        message.playerId = reader.int64();
                        break;
                    }
                case 7: {
                        message.bigBlindPos = reader.int32();
                        break;
                    }
                case 8: {
                        message.smallBlindPos = reader.int32();
                        break;
                    }
                case 14: {
                        if (!(message.publicCard && message.publicCard.length))
                            message.publicCard = [];
                        message.publicCard.push($root.api.Card.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.api.TablePlayer.decode(reader, reader.uint32()));
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
         * Decodes a ResGameFullStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResGameFullStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResGameFullStatus} ResGameFullStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameFullStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResGameFullStatus message.
         * @function verify
         * @memberof api.ResGameFullStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResGameFullStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inGame != null && message.hasOwnProperty("inGame"))
                if (typeof message.inGame !== "boolean")
                    return "inGame: boolean expected";
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                if (!$util.isInteger(message.tableNo))
                    return "tableNo: integer expected";
            if (message.gameStage != null && message.hasOwnProperty("gameStage"))
                if (!$util.isInteger(message.gameStage))
                    return "gameStage: integer expected";
            if (message.chip != null && message.hasOwnProperty("chip"))
                if (!$util.isInteger(message.chip))
                    return "chip: integer expected";
            if (message.roundTimes != null && message.hasOwnProperty("roundTimes"))
                if (!$util.isInteger(message.roundTimes))
                    return "roundTimes: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.bigBlindPos != null && message.hasOwnProperty("bigBlindPos"))
                if (!$util.isInteger(message.bigBlindPos))
                    return "bigBlindPos: integer expected";
            if (message.smallBlindPos != null && message.hasOwnProperty("smallBlindPos"))
                if (!$util.isInteger(message.smallBlindPos))
                    return "smallBlindPos: integer expected";
            if (message.publicCard != null && message.hasOwnProperty("publicCard")) {
                if (!Array.isArray(message.publicCard))
                    return "publicCard: array expected";
                for (let i = 0; i < message.publicCard.length; ++i) {
                    let error = $root.api.Card.verify(message.publicCard[i]);
                    if (error)
                        return "publicCard." + error;
                }
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (let i = 0; i < message.players.length; ++i) {
                    let error = $root.api.TablePlayer.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResGameFullStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResGameFullStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResGameFullStatus} ResGameFullStatus
         */
        ResGameFullStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResGameFullStatus)
                return object;
            let message = new $root.api.ResGameFullStatus();
            if (object.inGame != null)
                message.inGame = Boolean(object.inGame);
            if (object.tableNo != null)
                message.tableNo = object.tableNo | 0;
            if (object.gameStage != null)
                message.gameStage = object.gameStage | 0;
            if (object.chip != null)
                message.chip = object.chip | 0;
            if (object.roundTimes != null)
                message.roundTimes = object.roundTimes | 0;
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.bigBlindPos != null)
                message.bigBlindPos = object.bigBlindPos | 0;
            if (object.smallBlindPos != null)
                message.smallBlindPos = object.smallBlindPos | 0;
            if (object.publicCard) {
                if (!Array.isArray(object.publicCard))
                    throw TypeError(".api.ResGameFullStatus.publicCard: array expected");
                message.publicCard = [];
                for (let i = 0; i < object.publicCard.length; ++i) {
                    if (typeof object.publicCard[i] !== "object")
                        throw TypeError(".api.ResGameFullStatus.publicCard: object expected");
                    message.publicCard[i] = $root.api.Card.fromObject(object.publicCard[i]);
                }
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".api.ResGameFullStatus.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".api.ResGameFullStatus.players: object expected");
                    message.players[i] = $root.api.TablePlayer.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResGameFullStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResGameFullStatus
         * @static
         * @param {api.ResGameFullStatus} message ResGameFullStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResGameFullStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.publicCard = [];
                object.players = [];
            }
            if (options.defaults) {
                object.inGame = false;
                object.tableNo = 0;
                object.gameStage = 0;
                object.chip = 0;
                object.roundTimes = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.bigBlindPos = 0;
                object.smallBlindPos = 0;
            }
            if (message.inGame != null && message.hasOwnProperty("inGame"))
                object.inGame = message.inGame;
            if (message.tableNo != null && message.hasOwnProperty("tableNo"))
                object.tableNo = message.tableNo;
            if (message.gameStage != null && message.hasOwnProperty("gameStage"))
                object.gameStage = message.gameStage;
            if (message.chip != null && message.hasOwnProperty("chip"))
                object.chip = message.chip;
            if (message.roundTimes != null && message.hasOwnProperty("roundTimes"))
                object.roundTimes = message.roundTimes;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.bigBlindPos != null && message.hasOwnProperty("bigBlindPos"))
                object.bigBlindPos = message.bigBlindPos;
            if (message.smallBlindPos != null && message.hasOwnProperty("smallBlindPos"))
                object.smallBlindPos = message.smallBlindPos;
            if (message.publicCard && message.publicCard.length) {
                object.publicCard = [];
                for (let j = 0; j < message.publicCard.length; ++j)
                    object.publicCard[j] = $root.api.Card.toObject(message.publicCard[j], options);
            }
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.api.TablePlayer.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this ResGameFullStatus to JSON.
         * @function toJSON
         * @memberof api.ResGameFullStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResGameFullStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResGameFullStatus
         * @function getTypeUrl
         * @memberof api.ResGameFullStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResGameFullStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResGameFullStatus";
        };

        return ResGameFullStatus;
    })();

    api.TablePlayer = (function() {

        /**
         * Properties of a TablePlayer.
         * @memberof api
         * @interface ITablePlayer
         * @property {boolean|null} [robot] TablePlayer robot
         * @property {number|Long|null} [id] TablePlayer id
         * @property {string|null} [username] TablePlayer username
         * @property {string|null} [avatar] TablePlayer avatar
         * @property {number|null} [chip] TablePlayer chip
         * @property {number|null} [status] TablePlayer status
         * @property {number|null} [lastStatus] TablePlayer lastStatus
         * @property {boolean|null} [master] TablePlayer master
         * @property {Array.<api.ICard>|null} [handCard] TablePlayer handCard
         */

        /**
         * Constructs a new TablePlayer.
         * @memberof api
         * @classdesc Represents a TablePlayer.
         * @implements ITablePlayer
         * @constructor
         * @param {api.ITablePlayer=} [properties] Properties to set
         */
        function TablePlayer(properties) {
            this.handCard = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TablePlayer robot.
         * @member {boolean} robot
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.robot = false;

        /**
         * TablePlayer id.
         * @member {number|Long} id
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TablePlayer username.
         * @member {string} username
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.username = "";

        /**
         * TablePlayer avatar.
         * @member {string} avatar
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.avatar = "";

        /**
         * TablePlayer chip.
         * @member {number} chip
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.chip = 0;

        /**
         * TablePlayer status.
         * @member {number} status
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.status = 0;

        /**
         * TablePlayer lastStatus.
         * @member {number} lastStatus
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.lastStatus = 0;

        /**
         * TablePlayer master.
         * @member {boolean} master
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.master = false;

        /**
         * TablePlayer handCard.
         * @member {Array.<api.ICard>} handCard
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.handCard = $util.emptyArray;

        /**
         * Creates a new TablePlayer instance using the specified properties.
         * @function create
         * @memberof api.TablePlayer
         * @static
         * @param {api.ITablePlayer=} [properties] Properties to set
         * @returns {api.TablePlayer} TablePlayer instance
         */
        TablePlayer.create = function create(properties) {
            return new TablePlayer(properties);
        };

        /**
         * Encodes the specified TablePlayer message. Does not implicitly {@link api.TablePlayer.verify|verify} messages.
         * @function encode
         * @memberof api.TablePlayer
         * @static
         * @param {api.ITablePlayer} message TablePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TablePlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.robot != null && Object.hasOwnProperty.call(message, "robot"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.robot);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.chip);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            if (message.lastStatus != null && Object.hasOwnProperty.call(message, "lastStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.lastStatus);
            if (message.master != null && Object.hasOwnProperty.call(message, "master"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.master);
            if (message.handCard != null && message.handCard.length)
                for (let i = 0; i < message.handCard.length; ++i)
                    $root.api.Card.encode(message.handCard[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TablePlayer message, length delimited. Does not implicitly {@link api.TablePlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.TablePlayer
         * @static
         * @param {api.ITablePlayer} message TablePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TablePlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TablePlayer message from the specified reader or buffer.
         * @function decode
         * @memberof api.TablePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.TablePlayer} TablePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TablePlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.TablePlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.robot = reader.bool();
                        break;
                    }
                case 2: {
                        message.id = reader.int64();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                case 4: {
                        message.avatar = reader.string();
                        break;
                    }
                case 5: {
                        message.chip = reader.int32();
                        break;
                    }
                case 6: {
                        message.status = reader.int32();
                        break;
                    }
                case 7: {
                        message.lastStatus = reader.int32();
                        break;
                    }
                case 8: {
                        message.master = reader.bool();
                        break;
                    }
                case 15: {
                        if (!(message.handCard && message.handCard.length))
                            message.handCard = [];
                        message.handCard.push($root.api.Card.decode(reader, reader.uint32()));
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
         * Decodes a TablePlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.TablePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.TablePlayer} TablePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TablePlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TablePlayer message.
         * @function verify
         * @memberof api.TablePlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TablePlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.robot != null && message.hasOwnProperty("robot"))
                if (typeof message.robot !== "boolean")
                    return "robot: boolean expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.chip != null && message.hasOwnProperty("chip"))
                if (!$util.isInteger(message.chip))
                    return "chip: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.lastStatus != null && message.hasOwnProperty("lastStatus"))
                if (!$util.isInteger(message.lastStatus))
                    return "lastStatus: integer expected";
            if (message.master != null && message.hasOwnProperty("master"))
                if (typeof message.master !== "boolean")
                    return "master: boolean expected";
            if (message.handCard != null && message.hasOwnProperty("handCard")) {
                if (!Array.isArray(message.handCard))
                    return "handCard: array expected";
                for (let i = 0; i < message.handCard.length; ++i) {
                    let error = $root.api.Card.verify(message.handCard[i]);
                    if (error)
                        return "handCard." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TablePlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.TablePlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.TablePlayer} TablePlayer
         */
        TablePlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.api.TablePlayer)
                return object;
            let message = new $root.api.TablePlayer();
            if (object.robot != null)
                message.robot = Boolean(object.robot);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.username != null)
                message.username = String(object.username);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.chip != null)
                message.chip = object.chip | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.lastStatus != null)
                message.lastStatus = object.lastStatus | 0;
            if (object.master != null)
                message.master = Boolean(object.master);
            if (object.handCard) {
                if (!Array.isArray(object.handCard))
                    throw TypeError(".api.TablePlayer.handCard: array expected");
                message.handCard = [];
                for (let i = 0; i < object.handCard.length; ++i) {
                    if (typeof object.handCard[i] !== "object")
                        throw TypeError(".api.TablePlayer.handCard: object expected");
                    message.handCard[i] = $root.api.Card.fromObject(object.handCard[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TablePlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.TablePlayer
         * @static
         * @param {api.TablePlayer} message TablePlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TablePlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.handCard = [];
            if (options.defaults) {
                object.robot = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.username = "";
                object.avatar = "";
                object.chip = 0;
                object.status = 0;
                object.lastStatus = 0;
                object.master = false;
            }
            if (message.robot != null && message.hasOwnProperty("robot"))
                object.robot = message.robot;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.chip != null && message.hasOwnProperty("chip"))
                object.chip = message.chip;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.lastStatus != null && message.hasOwnProperty("lastStatus"))
                object.lastStatus = message.lastStatus;
            if (message.master != null && message.hasOwnProperty("master"))
                object.master = message.master;
            if (message.handCard && message.handCard.length) {
                object.handCard = [];
                for (let j = 0; j < message.handCard.length; ++j)
                    object.handCard[j] = $root.api.Card.toObject(message.handCard[j], options);
            }
            return object;
        };

        /**
         * Converts this TablePlayer to JSON.
         * @function toJSON
         * @memberof api.TablePlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TablePlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TablePlayer
         * @function getTypeUrl
         * @memberof api.TablePlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TablePlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.TablePlayer";
        };

        return TablePlayer;
    })();

    api.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof api
         * @interface ICard
         * @property {number|null} [dot] Card dot
         * @property {string|null} [suit] Card suit
         */

        /**
         * Constructs a new Card.
         * @memberof api
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {api.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card dot.
         * @member {number} dot
         * @memberof api.Card
         * @instance
         */
        Card.prototype.dot = 0;

        /**
         * Card suit.
         * @member {string} suit
         * @memberof api.Card
         * @instance
         */
        Card.prototype.suit = "";

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof api.Card
         * @static
         * @param {api.ICard=} [properties] Properties to set
         * @returns {api.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link api.Card.verify|verify} messages.
         * @function encode
         * @memberof api.Card
         * @static
         * @param {api.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dot != null && Object.hasOwnProperty.call(message, "dot"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dot);
            if (message.suit != null && Object.hasOwnProperty.call(message, "suit"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.suit);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link api.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Card
         * @static
         * @param {api.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof api.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Card();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dot = reader.int32();
                        break;
                    }
                case 2: {
                        message.suit = reader.string();
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
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof api.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dot != null && message.hasOwnProperty("dot"))
                if (!$util.isInteger(message.dot))
                    return "dot: integer expected";
            if (message.suit != null && message.hasOwnProperty("suit"))
                if (!$util.isString(message.suit))
                    return "suit: string expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Card)
                return object;
            let message = new $root.api.Card();
            if (object.dot != null)
                message.dot = object.dot | 0;
            if (object.suit != null)
                message.suit = String(object.suit);
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Card
         * @static
         * @param {api.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.dot = 0;
                object.suit = "";
            }
            if (message.dot != null && message.hasOwnProperty("dot"))
                object.dot = message.dot;
            if (message.suit != null && message.hasOwnProperty("suit"))
                object.suit = message.suit;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof api.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Card
         * @function getTypeUrl
         * @memberof api.Card
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Card.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Card";
        };

        return Card;
    })();

    api.ReqGameStart = (function() {

        /**
         * Properties of a ReqGameStart.
         * @memberof api
         * @interface IReqGameStart
         */

        /**
         * Constructs a new ReqGameStart.
         * @memberof api
         * @classdesc Represents a ReqGameStart.
         * @implements IReqGameStart
         * @constructor
         * @param {api.IReqGameStart=} [properties] Properties to set
         */
        function ReqGameStart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqGameStart instance using the specified properties.
         * @function create
         * @memberof api.ReqGameStart
         * @static
         * @param {api.IReqGameStart=} [properties] Properties to set
         * @returns {api.ReqGameStart} ReqGameStart instance
         */
        ReqGameStart.create = function create(properties) {
            return new ReqGameStart(properties);
        };

        /**
         * Encodes the specified ReqGameStart message. Does not implicitly {@link api.ReqGameStart.verify|verify} messages.
         * @function encode
         * @memberof api.ReqGameStart
         * @static
         * @param {api.IReqGameStart} message ReqGameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqGameStart message, length delimited. Does not implicitly {@link api.ReqGameStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqGameStart
         * @static
         * @param {api.IReqGameStart} message ReqGameStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameStart message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqGameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqGameStart} ReqGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqGameStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqGameStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqGameStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqGameStart} ReqGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameStart message.
         * @function verify
         * @memberof api.ReqGameStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqGameStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqGameStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqGameStart} ReqGameStart
         */
        ReqGameStart.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqGameStart)
                return object;
            return new $root.api.ReqGameStart();
        };

        /**
         * Creates a plain object from a ReqGameStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqGameStart
         * @static
         * @param {api.ReqGameStart} message ReqGameStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqGameStart.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqGameStart to JSON.
         * @function toJSON
         * @memberof api.ReqGameStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqGameStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqGameStart
         * @function getTypeUrl
         * @memberof api.ReqGameStart
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqGameStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqGameStart";
        };

        return ReqGameStart;
    })();

    api.ResBigBlindChip = (function() {

        /**
         * Properties of a ResBigBlindChip.
         * @memberof api
         * @interface IResBigBlindChip
         * @property {number|null} [chip] ResBigBlindChip chip
         */

        /**
         * Constructs a new ResBigBlindChip.
         * @memberof api
         * @classdesc Represents a ResBigBlindChip.
         * @implements IResBigBlindChip
         * @constructor
         * @param {api.IResBigBlindChip=} [properties] Properties to set
         */
        function ResBigBlindChip(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResBigBlindChip chip.
         * @member {number} chip
         * @memberof api.ResBigBlindChip
         * @instance
         */
        ResBigBlindChip.prototype.chip = 0;

        /**
         * Creates a new ResBigBlindChip instance using the specified properties.
         * @function create
         * @memberof api.ResBigBlindChip
         * @static
         * @param {api.IResBigBlindChip=} [properties] Properties to set
         * @returns {api.ResBigBlindChip} ResBigBlindChip instance
         */
        ResBigBlindChip.create = function create(properties) {
            return new ResBigBlindChip(properties);
        };

        /**
         * Encodes the specified ResBigBlindChip message. Does not implicitly {@link api.ResBigBlindChip.verify|verify} messages.
         * @function encode
         * @memberof api.ResBigBlindChip
         * @static
         * @param {api.IResBigBlindChip} message ResBigBlindChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResBigBlindChip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chip);
            return writer;
        };

        /**
         * Encodes the specified ResBigBlindChip message, length delimited. Does not implicitly {@link api.ResBigBlindChip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResBigBlindChip
         * @static
         * @param {api.IResBigBlindChip} message ResBigBlindChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResBigBlindChip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResBigBlindChip message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResBigBlindChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResBigBlindChip} ResBigBlindChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResBigBlindChip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResBigBlindChip();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chip = reader.int32();
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
         * Decodes a ResBigBlindChip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResBigBlindChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResBigBlindChip} ResBigBlindChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResBigBlindChip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResBigBlindChip message.
         * @function verify
         * @memberof api.ResBigBlindChip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResBigBlindChip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chip != null && message.hasOwnProperty("chip"))
                if (!$util.isInteger(message.chip))
                    return "chip: integer expected";
            return null;
        };

        /**
         * Creates a ResBigBlindChip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResBigBlindChip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResBigBlindChip} ResBigBlindChip
         */
        ResBigBlindChip.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResBigBlindChip)
                return object;
            let message = new $root.api.ResBigBlindChip();
            if (object.chip != null)
                message.chip = object.chip | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResBigBlindChip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResBigBlindChip
         * @static
         * @param {api.ResBigBlindChip} message ResBigBlindChip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResBigBlindChip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.chip = 0;
            if (message.chip != null && message.hasOwnProperty("chip"))
                object.chip = message.chip;
            return object;
        };

        /**
         * Converts this ResBigBlindChip to JSON.
         * @function toJSON
         * @memberof api.ResBigBlindChip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResBigBlindChip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResBigBlindChip
         * @function getTypeUrl
         * @memberof api.ResBigBlindChip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResBigBlindChip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResBigBlindChip";
        };

        return ResBigBlindChip;
    })();

    api.ResSmallBlindChip = (function() {

        /**
         * Properties of a ResSmallBlindChip.
         * @memberof api
         * @interface IResSmallBlindChip
         * @property {number|null} [chip] ResSmallBlindChip chip
         */

        /**
         * Constructs a new ResSmallBlindChip.
         * @memberof api
         * @classdesc Represents a ResSmallBlindChip.
         * @implements IResSmallBlindChip
         * @constructor
         * @param {api.IResSmallBlindChip=} [properties] Properties to set
         */
        function ResSmallBlindChip(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResSmallBlindChip chip.
         * @member {number} chip
         * @memberof api.ResSmallBlindChip
         * @instance
         */
        ResSmallBlindChip.prototype.chip = 0;

        /**
         * Creates a new ResSmallBlindChip instance using the specified properties.
         * @function create
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {api.IResSmallBlindChip=} [properties] Properties to set
         * @returns {api.ResSmallBlindChip} ResSmallBlindChip instance
         */
        ResSmallBlindChip.create = function create(properties) {
            return new ResSmallBlindChip(properties);
        };

        /**
         * Encodes the specified ResSmallBlindChip message. Does not implicitly {@link api.ResSmallBlindChip.verify|verify} messages.
         * @function encode
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {api.IResSmallBlindChip} message ResSmallBlindChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSmallBlindChip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chip != null && Object.hasOwnProperty.call(message, "chip"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chip);
            return writer;
        };

        /**
         * Encodes the specified ResSmallBlindChip message, length delimited. Does not implicitly {@link api.ResSmallBlindChip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {api.IResSmallBlindChip} message ResSmallBlindChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSmallBlindChip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResSmallBlindChip message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResSmallBlindChip} ResSmallBlindChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSmallBlindChip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResSmallBlindChip();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chip = reader.int32();
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
         * Decodes a ResSmallBlindChip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResSmallBlindChip} ResSmallBlindChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSmallBlindChip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResSmallBlindChip message.
         * @function verify
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResSmallBlindChip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chip != null && message.hasOwnProperty("chip"))
                if (!$util.isInteger(message.chip))
                    return "chip: integer expected";
            return null;
        };

        /**
         * Creates a ResSmallBlindChip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResSmallBlindChip} ResSmallBlindChip
         */
        ResSmallBlindChip.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResSmallBlindChip)
                return object;
            let message = new $root.api.ResSmallBlindChip();
            if (object.chip != null)
                message.chip = object.chip | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResSmallBlindChip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {api.ResSmallBlindChip} message ResSmallBlindChip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResSmallBlindChip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.chip = 0;
            if (message.chip != null && message.hasOwnProperty("chip"))
                object.chip = message.chip;
            return object;
        };

        /**
         * Converts this ResSmallBlindChip to JSON.
         * @function toJSON
         * @memberof api.ResSmallBlindChip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResSmallBlindChip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResSmallBlindChip
         * @function getTypeUrl
         * @memberof api.ResSmallBlindChip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResSmallBlindChip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResSmallBlindChip";
        };

        return ResSmallBlindChip;
    })();

    api.ReqDismissGameTable = (function() {

        /**
         * Properties of a ReqDismissGameTable.
         * @memberof api
         * @interface IReqDismissGameTable
         */

        /**
         * Constructs a new ReqDismissGameTable.
         * @memberof api
         * @classdesc Represents a ReqDismissGameTable.
         * @implements IReqDismissGameTable
         * @constructor
         * @param {api.IReqDismissGameTable=} [properties] Properties to set
         */
        function ReqDismissGameTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReqDismissGameTable instance using the specified properties.
         * @function create
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {api.IReqDismissGameTable=} [properties] Properties to set
         * @returns {api.ReqDismissGameTable} ReqDismissGameTable instance
         */
        ReqDismissGameTable.create = function create(properties) {
            return new ReqDismissGameTable(properties);
        };

        /**
         * Encodes the specified ReqDismissGameTable message. Does not implicitly {@link api.ReqDismissGameTable.verify|verify} messages.
         * @function encode
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {api.IReqDismissGameTable} message ReqDismissGameTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDismissGameTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReqDismissGameTable message, length delimited. Does not implicitly {@link api.ReqDismissGameTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {api.IReqDismissGameTable} message ReqDismissGameTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDismissGameTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqDismissGameTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqDismissGameTable} ReqDismissGameTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDismissGameTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqDismissGameTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqDismissGameTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqDismissGameTable} ReqDismissGameTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDismissGameTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqDismissGameTable message.
         * @function verify
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqDismissGameTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReqDismissGameTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqDismissGameTable} ReqDismissGameTable
         */
        ReqDismissGameTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqDismissGameTable)
                return object;
            return new $root.api.ReqDismissGameTable();
        };

        /**
         * Creates a plain object from a ReqDismissGameTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {api.ReqDismissGameTable} message ReqDismissGameTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqDismissGameTable.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReqDismissGameTable to JSON.
         * @function toJSON
         * @memberof api.ReqDismissGameTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqDismissGameTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqDismissGameTable
         * @function getTypeUrl
         * @memberof api.ReqDismissGameTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqDismissGameTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqDismissGameTable";
        };

        return ReqDismissGameTable;
    })();

    api.ResDismissGameTable = (function() {

        /**
         * Properties of a ResDismissGameTable.
         * @memberof api
         * @interface IResDismissGameTable
         */

        /**
         * Constructs a new ResDismissGameTable.
         * @memberof api
         * @classdesc Represents a ResDismissGameTable.
         * @implements IResDismissGameTable
         * @constructor
         * @param {api.IResDismissGameTable=} [properties] Properties to set
         */
        function ResDismissGameTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResDismissGameTable instance using the specified properties.
         * @function create
         * @memberof api.ResDismissGameTable
         * @static
         * @param {api.IResDismissGameTable=} [properties] Properties to set
         * @returns {api.ResDismissGameTable} ResDismissGameTable instance
         */
        ResDismissGameTable.create = function create(properties) {
            return new ResDismissGameTable(properties);
        };

        /**
         * Encodes the specified ResDismissGameTable message. Does not implicitly {@link api.ResDismissGameTable.verify|verify} messages.
         * @function encode
         * @memberof api.ResDismissGameTable
         * @static
         * @param {api.IResDismissGameTable} message ResDismissGameTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResDismissGameTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResDismissGameTable message, length delimited. Does not implicitly {@link api.ResDismissGameTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResDismissGameTable
         * @static
         * @param {api.IResDismissGameTable} message ResDismissGameTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResDismissGameTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResDismissGameTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResDismissGameTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResDismissGameTable} ResDismissGameTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResDismissGameTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResDismissGameTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResDismissGameTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResDismissGameTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResDismissGameTable} ResDismissGameTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResDismissGameTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResDismissGameTable message.
         * @function verify
         * @memberof api.ResDismissGameTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResDismissGameTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResDismissGameTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResDismissGameTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResDismissGameTable} ResDismissGameTable
         */
        ResDismissGameTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResDismissGameTable)
                return object;
            return new $root.api.ResDismissGameTable();
        };

        /**
         * Creates a plain object from a ResDismissGameTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResDismissGameTable
         * @static
         * @param {api.ResDismissGameTable} message ResDismissGameTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResDismissGameTable.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResDismissGameTable to JSON.
         * @function toJSON
         * @memberof api.ResDismissGameTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResDismissGameTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResDismissGameTable
         * @function getTypeUrl
         * @memberof api.ResDismissGameTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResDismissGameTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResDismissGameTable";
        };

        return ResDismissGameTable;
    })();

    return api;
})();

export { $root as default };
