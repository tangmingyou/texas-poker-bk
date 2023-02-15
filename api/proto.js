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
         * @property {number|null} [texasType] ReqCreateTable texasType
         * @property {number|null} [bigBlind] ReqCreateTable bigBlind
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
         * ReqCreateTable texasType.
         * @member {number} texasType
         * @memberof api.ReqCreateTable
         * @instance
         */
        ReqCreateTable.prototype.texasType = 0;

        /**
         * ReqCreateTable bigBlind.
         * @member {number} bigBlind
         * @memberof api.ReqCreateTable
         * @instance
         */
        ReqCreateTable.prototype.bigBlind = 0;

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
            if (message.texasType != null && Object.hasOwnProperty.call(message, "texasType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.texasType);
            if (message.bigBlind != null && Object.hasOwnProperty.call(message, "bigBlind"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bigBlind);
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
                case 3: {
                        message.texasType = reader.int32();
                        break;
                    }
                case 4: {
                        message.bigBlind = reader.int32();
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
            if (message.texasType != null && message.hasOwnProperty("texasType"))
                if (!$util.isInteger(message.texasType))
                    return "texasType: integer expected";
            if (message.bigBlind != null && message.hasOwnProperty("bigBlind"))
                if (!$util.isInteger(message.bigBlind))
                    return "bigBlind: integer expected";
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
            if (object.texasType != null)
                message.texasType = object.texasType | 0;
            if (object.bigBlind != null)
                message.bigBlind = object.bigBlind | 0;
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
                object.texasType = 0;
                object.bigBlind = 0;
            }
            if (message.players != null && message.hasOwnProperty("players"))
                object.players = message.players;
            if (message.robots != null && message.hasOwnProperty("robots"))
                object.robots = message.robots;
            if (message.texasType != null && message.hasOwnProperty("texasType"))
                object.texasType = message.texasType;
            if (message.bigBlind != null && message.hasOwnProperty("bigBlind"))
                object.bigBlind = message.bigBlind;
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
         * @property {number|null} [roundBetTimes] TablePlayer roundBetTimes
         * @property {number|null} [totalBetChip] TablePlayer totalBetChip
         * @property {api.IBetRole|null} [betRole] TablePlayer betRole
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
         * TablePlayer roundBetTimes.
         * @member {number} roundBetTimes
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.roundBetTimes = 0;

        /**
         * TablePlayer totalBetChip.
         * @member {number} totalBetChip
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.totalBetChip = 0;

        /**
         * TablePlayer betRole.
         * @member {api.IBetRole|null|undefined} betRole
         * @memberof api.TablePlayer
         * @instance
         */
        TablePlayer.prototype.betRole = null;

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
            if (message.roundBetTimes != null && Object.hasOwnProperty.call(message, "roundBetTimes"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.roundBetTimes);
            if (message.totalBetChip != null && Object.hasOwnProperty.call(message, "totalBetChip"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.totalBetChip);
            if (message.betRole != null && Object.hasOwnProperty.call(message, "betRole"))
                $root.api.BetRole.encode(message.betRole, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
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
                case 11: {
                        message.roundBetTimes = reader.int32();
                        break;
                    }
                case 13: {
                        message.totalBetChip = reader.int32();
                        break;
                    }
                case 14: {
                        message.betRole = $root.api.BetRole.decode(reader, reader.uint32());
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
            if (message.roundBetTimes != null && message.hasOwnProperty("roundBetTimes"))
                if (!$util.isInteger(message.roundBetTimes))
                    return "roundBetTimes: integer expected";
            if (message.totalBetChip != null && message.hasOwnProperty("totalBetChip"))
                if (!$util.isInteger(message.totalBetChip))
                    return "totalBetChip: integer expected";
            if (message.betRole != null && message.hasOwnProperty("betRole")) {
                let error = $root.api.BetRole.verify(message.betRole);
                if (error)
                    return "betRole." + error;
            }
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
            if (object.roundBetTimes != null)
                message.roundBetTimes = object.roundBetTimes | 0;
            if (object.totalBetChip != null)
                message.totalBetChip = object.totalBetChip | 0;
            if (object.betRole != null) {
                if (typeof object.betRole !== "object")
                    throw TypeError(".api.TablePlayer.betRole: object expected");
                message.betRole = $root.api.BetRole.fromObject(object.betRole);
            }
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
                object.roundBetTimes = 0;
                object.totalBetChip = 0;
                object.betRole = null;
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
            if (message.roundBetTimes != null && message.hasOwnProperty("roundBetTimes"))
                object.roundBetTimes = message.roundBetTimes;
            if (message.totalBetChip != null && message.hasOwnProperty("totalBetChip"))
                object.totalBetChip = message.totalBetChip;
            if (message.betRole != null && message.hasOwnProperty("betRole"))
                object.betRole = $root.api.BetRole.toObject(message.betRole, options);
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

    api.BetRole = (function() {

        /**
         * Properties of a BetRole.
         * @memberof api
         * @interface IBetRole
         * @property {number|null} [betMin] BetRole betMin
         * @property {number|null} [betMax] BetRole betMax
         * @property {Array.<number>|null} [betOpts] BetRole betOpts
         */

        /**
         * Constructs a new BetRole.
         * @memberof api
         * @classdesc Represents a BetRole.
         * @implements IBetRole
         * @constructor
         * @param {api.IBetRole=} [properties] Properties to set
         */
        function BetRole(properties) {
            this.betOpts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRole betMin.
         * @member {number} betMin
         * @memberof api.BetRole
         * @instance
         */
        BetRole.prototype.betMin = 0;

        /**
         * BetRole betMax.
         * @member {number} betMax
         * @memberof api.BetRole
         * @instance
         */
        BetRole.prototype.betMax = 0;

        /**
         * BetRole betOpts.
         * @member {Array.<number>} betOpts
         * @memberof api.BetRole
         * @instance
         */
        BetRole.prototype.betOpts = $util.emptyArray;

        /**
         * Creates a new BetRole instance using the specified properties.
         * @function create
         * @memberof api.BetRole
         * @static
         * @param {api.IBetRole=} [properties] Properties to set
         * @returns {api.BetRole} BetRole instance
         */
        BetRole.create = function create(properties) {
            return new BetRole(properties);
        };

        /**
         * Encodes the specified BetRole message. Does not implicitly {@link api.BetRole.verify|verify} messages.
         * @function encode
         * @memberof api.BetRole
         * @static
         * @param {api.IBetRole} message BetRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.betMin != null && Object.hasOwnProperty.call(message, "betMin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betMin);
            if (message.betMax != null && Object.hasOwnProperty.call(message, "betMax"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betMax);
            if (message.betOpts != null && message.betOpts.length) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork();
                for (let i = 0; i < message.betOpts.length; ++i)
                    writer.int32(message.betOpts[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BetRole message, length delimited. Does not implicitly {@link api.BetRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.BetRole
         * @static
         * @param {api.IBetRole} message BetRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRole message from the specified reader or buffer.
         * @function decode
         * @memberof api.BetRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.BetRole} BetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.BetRole();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.betMin = reader.int32();
                        break;
                    }
                case 2: {
                        message.betMax = reader.int32();
                        break;
                    }
                case 13: {
                        if (!(message.betOpts && message.betOpts.length))
                            message.betOpts = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.betOpts.push(reader.int32());
                        } else
                            message.betOpts.push(reader.int32());
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
         * Decodes a BetRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.BetRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.BetRole} BetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRole message.
         * @function verify
         * @memberof api.BetRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.betMin != null && message.hasOwnProperty("betMin"))
                if (!$util.isInteger(message.betMin))
                    return "betMin: integer expected";
            if (message.betMax != null && message.hasOwnProperty("betMax"))
                if (!$util.isInteger(message.betMax))
                    return "betMax: integer expected";
            if (message.betOpts != null && message.hasOwnProperty("betOpts")) {
                if (!Array.isArray(message.betOpts))
                    return "betOpts: array expected";
                for (let i = 0; i < message.betOpts.length; ++i)
                    if (!$util.isInteger(message.betOpts[i]))
                        return "betOpts: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a BetRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.BetRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.BetRole} BetRole
         */
        BetRole.fromObject = function fromObject(object) {
            if (object instanceof $root.api.BetRole)
                return object;
            let message = new $root.api.BetRole();
            if (object.betMin != null)
                message.betMin = object.betMin | 0;
            if (object.betMax != null)
                message.betMax = object.betMax | 0;
            if (object.betOpts) {
                if (!Array.isArray(object.betOpts))
                    throw TypeError(".api.BetRole.betOpts: array expected");
                message.betOpts = [];
                for (let i = 0; i < object.betOpts.length; ++i)
                    message.betOpts[i] = object.betOpts[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a BetRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.BetRole
         * @static
         * @param {api.BetRole} message BetRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.betOpts = [];
            if (options.defaults) {
                object.betMin = 0;
                object.betMax = 0;
            }
            if (message.betMin != null && message.hasOwnProperty("betMin"))
                object.betMin = message.betMin;
            if (message.betMax != null && message.hasOwnProperty("betMax"))
                object.betMax = message.betMax;
            if (message.betOpts && message.betOpts.length) {
                object.betOpts = [];
                for (let j = 0; j < message.betOpts.length; ++j)
                    object.betOpts[j] = message.betOpts[j];
            }
            return object;
        };

        /**
         * Converts this BetRole to JSON.
         * @function toJSON
         * @memberof api.BetRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BetRole
         * @function getTypeUrl
         * @memberof api.BetRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BetRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.BetRole";
        };

        return BetRole;
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

    api.ReqBetting = (function() {

        /**
         * Properties of a ReqBetting.
         * @memberof api
         * @interface IReqBetting
         * @property {number|null} [betType] ReqBetting betType
         * @property {number|null} [betChip] ReqBetting betChip
         */

        /**
         * Constructs a new ReqBetting.
         * @memberof api
         * @classdesc Represents a ReqBetting.
         * @implements IReqBetting
         * @constructor
         * @param {api.IReqBetting=} [properties] Properties to set
         */
        function ReqBetting(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqBetting betType.
         * @member {number} betType
         * @memberof api.ReqBetting
         * @instance
         */
        ReqBetting.prototype.betType = 0;

        /**
         * ReqBetting betChip.
         * @member {number} betChip
         * @memberof api.ReqBetting
         * @instance
         */
        ReqBetting.prototype.betChip = 0;

        /**
         * Creates a new ReqBetting instance using the specified properties.
         * @function create
         * @memberof api.ReqBetting
         * @static
         * @param {api.IReqBetting=} [properties] Properties to set
         * @returns {api.ReqBetting} ReqBetting instance
         */
        ReqBetting.create = function create(properties) {
            return new ReqBetting(properties);
        };

        /**
         * Encodes the specified ReqBetting message. Does not implicitly {@link api.ReqBetting.verify|verify} messages.
         * @function encode
         * @memberof api.ReqBetting
         * @static
         * @param {api.IReqBetting} message ReqBetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.betType != null && Object.hasOwnProperty.call(message, "betType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betType);
            if (message.betChip != null && Object.hasOwnProperty.call(message, "betChip"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betChip);
            return writer;
        };

        /**
         * Encodes the specified ReqBetting message, length delimited. Does not implicitly {@link api.ReqBetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ReqBetting
         * @static
         * @param {api.IReqBetting} message ReqBetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqBetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqBetting message from the specified reader or buffer.
         * @function decode
         * @memberof api.ReqBetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ReqBetting} ReqBetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ReqBetting();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.betType = reader.int32();
                        break;
                    }
                case 2: {
                        message.betChip = reader.int32();
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
         * Decodes a ReqBetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ReqBetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ReqBetting} ReqBetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqBetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqBetting message.
         * @function verify
         * @memberof api.ReqBetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqBetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.betType != null && message.hasOwnProperty("betType"))
                if (!$util.isInteger(message.betType))
                    return "betType: integer expected";
            if (message.betChip != null && message.hasOwnProperty("betChip"))
                if (!$util.isInteger(message.betChip))
                    return "betChip: integer expected";
            return null;
        };

        /**
         * Creates a ReqBetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ReqBetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ReqBetting} ReqBetting
         */
        ReqBetting.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ReqBetting)
                return object;
            let message = new $root.api.ReqBetting();
            if (object.betType != null)
                message.betType = object.betType | 0;
            if (object.betChip != null)
                message.betChip = object.betChip | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqBetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ReqBetting
         * @static
         * @param {api.ReqBetting} message ReqBetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqBetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.betType = 0;
                object.betChip = 0;
            }
            if (message.betType != null && message.hasOwnProperty("betType"))
                object.betType = message.betType;
            if (message.betChip != null && message.hasOwnProperty("betChip"))
                object.betChip = message.betChip;
            return object;
        };

        /**
         * Converts this ReqBetting to JSON.
         * @function toJSON
         * @memberof api.ReqBetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqBetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqBetting
         * @function getTypeUrl
         * @memberof api.ReqBetting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqBetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ReqBetting";
        };

        return ReqBetting;
    })();

    api.ResNoticePlayerLine = (function() {

        /**
         * Properties of a ResNoticePlayerLine.
         * @memberof api
         * @interface IResNoticePlayerLine
         * @property {number|Long|null} [playerId] ResNoticePlayerLine playerId
         * @property {string|null} [line1] ResNoticePlayerLine line1
         * @property {string|null} [line2] ResNoticePlayerLine line2
         * @property {string|null} [line3] ResNoticePlayerLine line3
         */

        /**
         * Constructs a new ResNoticePlayerLine.
         * @memberof api
         * @classdesc Represents a ResNoticePlayerLine.
         * @implements IResNoticePlayerLine
         * @constructor
         * @param {api.IResNoticePlayerLine=} [properties] Properties to set
         */
        function ResNoticePlayerLine(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResNoticePlayerLine playerId.
         * @member {number|Long} playerId
         * @memberof api.ResNoticePlayerLine
         * @instance
         */
        ResNoticePlayerLine.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResNoticePlayerLine line1.
         * @member {string} line1
         * @memberof api.ResNoticePlayerLine
         * @instance
         */
        ResNoticePlayerLine.prototype.line1 = "";

        /**
         * ResNoticePlayerLine line2.
         * @member {string} line2
         * @memberof api.ResNoticePlayerLine
         * @instance
         */
        ResNoticePlayerLine.prototype.line2 = "";

        /**
         * ResNoticePlayerLine line3.
         * @member {string} line3
         * @memberof api.ResNoticePlayerLine
         * @instance
         */
        ResNoticePlayerLine.prototype.line3 = "";

        /**
         * Creates a new ResNoticePlayerLine instance using the specified properties.
         * @function create
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {api.IResNoticePlayerLine=} [properties] Properties to set
         * @returns {api.ResNoticePlayerLine} ResNoticePlayerLine instance
         */
        ResNoticePlayerLine.create = function create(properties) {
            return new ResNoticePlayerLine(properties);
        };

        /**
         * Encodes the specified ResNoticePlayerLine message. Does not implicitly {@link api.ResNoticePlayerLine.verify|verify} messages.
         * @function encode
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {api.IResNoticePlayerLine} message ResNoticePlayerLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResNoticePlayerLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            if (message.line1 != null && Object.hasOwnProperty.call(message, "line1"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.line1);
            if (message.line2 != null && Object.hasOwnProperty.call(message, "line2"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.line2);
            if (message.line3 != null && Object.hasOwnProperty.call(message, "line3"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.line3);
            return writer;
        };

        /**
         * Encodes the specified ResNoticePlayerLine message, length delimited. Does not implicitly {@link api.ResNoticePlayerLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {api.IResNoticePlayerLine} message ResNoticePlayerLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResNoticePlayerLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResNoticePlayerLine message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResNoticePlayerLine} ResNoticePlayerLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResNoticePlayerLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResNoticePlayerLine();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int64();
                        break;
                    }
                case 11: {
                        message.line1 = reader.string();
                        break;
                    }
                case 12: {
                        message.line2 = reader.string();
                        break;
                    }
                case 13: {
                        message.line3 = reader.string();
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
         * Decodes a ResNoticePlayerLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResNoticePlayerLine} ResNoticePlayerLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResNoticePlayerLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResNoticePlayerLine message.
         * @function verify
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResNoticePlayerLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.line1 != null && message.hasOwnProperty("line1"))
                if (!$util.isString(message.line1))
                    return "line1: string expected";
            if (message.line2 != null && message.hasOwnProperty("line2"))
                if (!$util.isString(message.line2))
                    return "line2: string expected";
            if (message.line3 != null && message.hasOwnProperty("line3"))
                if (!$util.isString(message.line3))
                    return "line3: string expected";
            return null;
        };

        /**
         * Creates a ResNoticePlayerLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResNoticePlayerLine} ResNoticePlayerLine
         */
        ResNoticePlayerLine.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResNoticePlayerLine)
                return object;
            let message = new $root.api.ResNoticePlayerLine();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.line1 != null)
                message.line1 = String(object.line1);
            if (object.line2 != null)
                message.line2 = String(object.line2);
            if (object.line3 != null)
                message.line3 = String(object.line3);
            return message;
        };

        /**
         * Creates a plain object from a ResNoticePlayerLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {api.ResNoticePlayerLine} message ResNoticePlayerLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResNoticePlayerLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.line1 = "";
                object.line2 = "";
                object.line3 = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.line1 != null && message.hasOwnProperty("line1"))
                object.line1 = message.line1;
            if (message.line2 != null && message.hasOwnProperty("line2"))
                object.line2 = message.line2;
            if (message.line3 != null && message.hasOwnProperty("line3"))
                object.line3 = message.line3;
            return object;
        };

        /**
         * Converts this ResNoticePlayerLine to JSON.
         * @function toJSON
         * @memberof api.ResNoticePlayerLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResNoticePlayerLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResNoticePlayerLine
         * @function getTypeUrl
         * @memberof api.ResNoticePlayerLine
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResNoticePlayerLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResNoticePlayerLine";
        };

        return ResNoticePlayerLine;
    })();

    api.ResGameEndSettle = (function() {

        /**
         * Properties of a ResGameEndSettle.
         * @memberof api
         * @interface IResGameEndSettle
         * @property {api.IResGameFullStatus|null} [game] ResGameEndSettle game
         */

        /**
         * Constructs a new ResGameEndSettle.
         * @memberof api
         * @classdesc Represents a ResGameEndSettle.
         * @implements IResGameEndSettle
         * @constructor
         * @param {api.IResGameEndSettle=} [properties] Properties to set
         */
        function ResGameEndSettle(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResGameEndSettle game.
         * @member {api.IResGameFullStatus|null|undefined} game
         * @memberof api.ResGameEndSettle
         * @instance
         */
        ResGameEndSettle.prototype.game = null;

        /**
         * Creates a new ResGameEndSettle instance using the specified properties.
         * @function create
         * @memberof api.ResGameEndSettle
         * @static
         * @param {api.IResGameEndSettle=} [properties] Properties to set
         * @returns {api.ResGameEndSettle} ResGameEndSettle instance
         */
        ResGameEndSettle.create = function create(properties) {
            return new ResGameEndSettle(properties);
        };

        /**
         * Encodes the specified ResGameEndSettle message. Does not implicitly {@link api.ResGameEndSettle.verify|verify} messages.
         * @function encode
         * @memberof api.ResGameEndSettle
         * @static
         * @param {api.IResGameEndSettle} message ResGameEndSettle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameEndSettle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                $root.api.ResGameFullStatus.encode(message.game, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResGameEndSettle message, length delimited. Does not implicitly {@link api.ResGameEndSettle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResGameEndSettle
         * @static
         * @param {api.IResGameEndSettle} message ResGameEndSettle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameEndSettle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResGameEndSettle message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResGameEndSettle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResGameEndSettle} ResGameEndSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameEndSettle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResGameEndSettle();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 11: {
                        message.game = $root.api.ResGameFullStatus.decode(reader, reader.uint32());
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
         * Decodes a ResGameEndSettle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResGameEndSettle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResGameEndSettle} ResGameEndSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameEndSettle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResGameEndSettle message.
         * @function verify
         * @memberof api.ResGameEndSettle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResGameEndSettle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game != null && message.hasOwnProperty("game")) {
                let error = $root.api.ResGameFullStatus.verify(message.game);
                if (error)
                    return "game." + error;
            }
            return null;
        };

        /**
         * Creates a ResGameEndSettle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResGameEndSettle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResGameEndSettle} ResGameEndSettle
         */
        ResGameEndSettle.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResGameEndSettle)
                return object;
            let message = new $root.api.ResGameEndSettle();
            if (object.game != null) {
                if (typeof object.game !== "object")
                    throw TypeError(".api.ResGameEndSettle.game: object expected");
                message.game = $root.api.ResGameFullStatus.fromObject(object.game);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResGameEndSettle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResGameEndSettle
         * @static
         * @param {api.ResGameEndSettle} message ResGameEndSettle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResGameEndSettle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.game = null;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = $root.api.ResGameFullStatus.toObject(message.game, options);
            return object;
        };

        /**
         * Converts this ResGameEndSettle to JSON.
         * @function toJSON
         * @memberof api.ResGameEndSettle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResGameEndSettle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResGameEndSettle
         * @function getTypeUrl
         * @memberof api.ResGameEndSettle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResGameEndSettle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResGameEndSettle";
        };

        return ResGameEndSettle;
    })();

    api.ResCalcWinnerChip = (function() {

        /**
         * Properties of a ResCalcWinnerChip.
         * @memberof api
         * @interface IResCalcWinnerChip
         * @property {Object.<string,number>|null} [winsChip] ResCalcWinnerChip winsChip
         */

        /**
         * Constructs a new ResCalcWinnerChip.
         * @memberof api
         * @classdesc Represents a ResCalcWinnerChip.
         * @implements IResCalcWinnerChip
         * @constructor
         * @param {api.IResCalcWinnerChip=} [properties] Properties to set
         */
        function ResCalcWinnerChip(properties) {
            this.winsChip = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResCalcWinnerChip winsChip.
         * @member {Object.<string,number>} winsChip
         * @memberof api.ResCalcWinnerChip
         * @instance
         */
        ResCalcWinnerChip.prototype.winsChip = $util.emptyObject;

        /**
         * Creates a new ResCalcWinnerChip instance using the specified properties.
         * @function create
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {api.IResCalcWinnerChip=} [properties] Properties to set
         * @returns {api.ResCalcWinnerChip} ResCalcWinnerChip instance
         */
        ResCalcWinnerChip.create = function create(properties) {
            return new ResCalcWinnerChip(properties);
        };

        /**
         * Encodes the specified ResCalcWinnerChip message. Does not implicitly {@link api.ResCalcWinnerChip.verify|verify} messages.
         * @function encode
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {api.IResCalcWinnerChip} message ResCalcWinnerChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCalcWinnerChip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winsChip != null && Object.hasOwnProperty.call(message, "winsChip"))
                for (let keys = Object.keys(message.winsChip), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.winsChip[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResCalcWinnerChip message, length delimited. Does not implicitly {@link api.ResCalcWinnerChip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {api.IResCalcWinnerChip} message ResCalcWinnerChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCalcWinnerChip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResCalcWinnerChip message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResCalcWinnerChip} ResCalcWinnerChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCalcWinnerChip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResCalcWinnerChip(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 9: {
                        if (message.winsChip === $util.emptyObject)
                            message.winsChip = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int64();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.winsChip[typeof key === "object" ? $util.longToHash(key) : key] = value;
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
         * Decodes a ResCalcWinnerChip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResCalcWinnerChip} ResCalcWinnerChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCalcWinnerChip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResCalcWinnerChip message.
         * @function verify
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResCalcWinnerChip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winsChip != null && message.hasOwnProperty("winsChip")) {
                if (!$util.isObject(message.winsChip))
                    return "winsChip: object expected";
                let key = Object.keys(message.winsChip);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "winsChip: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.winsChip[key[i]]))
                        return "winsChip: integer{k:int64} expected";
                }
            }
            return null;
        };

        /**
         * Creates a ResCalcWinnerChip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResCalcWinnerChip} ResCalcWinnerChip
         */
        ResCalcWinnerChip.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResCalcWinnerChip)
                return object;
            let message = new $root.api.ResCalcWinnerChip();
            if (object.winsChip) {
                if (typeof object.winsChip !== "object")
                    throw TypeError(".api.ResCalcWinnerChip.winsChip: object expected");
                message.winsChip = {};
                for (let keys = Object.keys(object.winsChip), i = 0; i < keys.length; ++i)
                    message.winsChip[keys[i]] = object.winsChip[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ResCalcWinnerChip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {api.ResCalcWinnerChip} message ResCalcWinnerChip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResCalcWinnerChip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.winsChip = {};
            let keys2;
            if (message.winsChip && (keys2 = Object.keys(message.winsChip)).length) {
                object.winsChip = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.winsChip[keys2[j]] = message.winsChip[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ResCalcWinnerChip to JSON.
         * @function toJSON
         * @memberof api.ResCalcWinnerChip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResCalcWinnerChip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResCalcWinnerChip
         * @function getTypeUrl
         * @memberof api.ResCalcWinnerChip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResCalcWinnerChip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResCalcWinnerChip";
        };

        return ResCalcWinnerChip;
    })();

    api.ResGameNextRound = (function() {

        /**
         * Properties of a ResGameNextRound.
         * @memberof api
         * @interface IResGameNextRound
         * @property {number|null} [round] ResGameNextRound round
         */

        /**
         * Constructs a new ResGameNextRound.
         * @memberof api
         * @classdesc Represents a ResGameNextRound.
         * @implements IResGameNextRound
         * @constructor
         * @param {api.IResGameNextRound=} [properties] Properties to set
         */
        function ResGameNextRound(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResGameNextRound round.
         * @member {number} round
         * @memberof api.ResGameNextRound
         * @instance
         */
        ResGameNextRound.prototype.round = 0;

        /**
         * Creates a new ResGameNextRound instance using the specified properties.
         * @function create
         * @memberof api.ResGameNextRound
         * @static
         * @param {api.IResGameNextRound=} [properties] Properties to set
         * @returns {api.ResGameNextRound} ResGameNextRound instance
         */
        ResGameNextRound.create = function create(properties) {
            return new ResGameNextRound(properties);
        };

        /**
         * Encodes the specified ResGameNextRound message. Does not implicitly {@link api.ResGameNextRound.verify|verify} messages.
         * @function encode
         * @memberof api.ResGameNextRound
         * @static
         * @param {api.IResGameNextRound} message ResGameNextRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameNextRound.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
            return writer;
        };

        /**
         * Encodes the specified ResGameNextRound message, length delimited. Does not implicitly {@link api.ResGameNextRound.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResGameNextRound
         * @static
         * @param {api.IResGameNextRound} message ResGameNextRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResGameNextRound.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResGameNextRound message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResGameNextRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResGameNextRound} ResGameNextRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameNextRound.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResGameNextRound();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.round = reader.int32();
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
         * Decodes a ResGameNextRound message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResGameNextRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResGameNextRound} ResGameNextRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResGameNextRound.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResGameNextRound message.
         * @function verify
         * @memberof api.ResGameNextRound
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResGameNextRound.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            return null;
        };

        /**
         * Creates a ResGameNextRound message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResGameNextRound
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResGameNextRound} ResGameNextRound
         */
        ResGameNextRound.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResGameNextRound)
                return object;
            let message = new $root.api.ResGameNextRound();
            if (object.round != null)
                message.round = object.round | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResGameNextRound message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResGameNextRound
         * @static
         * @param {api.ResGameNextRound} message ResGameNextRound
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResGameNextRound.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.round = 0;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            return object;
        };

        /**
         * Converts this ResGameNextRound to JSON.
         * @function toJSON
         * @memberof api.ResGameNextRound
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResGameNextRound.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResGameNextRound
         * @function getTypeUrl
         * @memberof api.ResGameNextRound
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResGameNextRound.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResGameNextRound";
        };

        return ResGameNextRound;
    })();

    return api;
})();

export { $root as default };
