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
            return new $root.api.Ping();
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
        Ping.toObject = function toObject() {
            return {};
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
            return new $root.api.Pong();
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
        Pong.toObject = function toObject() {
            return {};
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

    api.ResFail = (function() {

        /**
         * Properties of a ResFail.
         * @memberof api
         * @interface IResFail
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
            if (options.defaults)
                object.msg = "";
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
         * @property {number|null} [status] ResIdentity status
         * @property {string|null} [msg] ResIdentity msg
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
         * ResIdentity status.
         * @member {number} status
         * @memberof api.ResIdentity
         * @instance
         */
        ResIdentity.prototype.status = 0;

        /**
         * ResIdentity msg.
         * @member {string} msg
         * @memberof api.ResIdentity
         * @instance
         */
        ResIdentity.prototype.msg = "";

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
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
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
         * @memberof api.ResIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResIdentity} ResIdentity
         */
        ResIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResIdentity)
                return object;
            let message = new $root.api.ResIdentity();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
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
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

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
            return new $root.api.ResLobbyView();
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
        ResLobbyView.toObject = function toObject() {
            return {};
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

    api.ReqCreateTable = (function() {

        /**
         * Properties of a ReqCreateTable.
         * @memberof api
         * @interface IReqCreateTable
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
            return new $root.api.ReqCreateTable();
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
        ReqCreateTable.toObject = function toObject() {
            return {};
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
            return new $root.api.ResCreateTable();
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
        ResCreateTable.toObject = function toObject() {
            return {};
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
            return new $root.api.ReqJoinTable();
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
        ReqJoinTable.toObject = function toObject() {
            return {};
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

    api.ResJoinTable = (function() {

        /**
         * Properties of a ResJoinTable.
         * @memberof api
         * @interface IResJoinTable
         */

        /**
         * Constructs a new ResJoinTable.
         * @memberof api
         * @classdesc Represents a ResJoinTable.
         * @implements IResJoinTable
         * @constructor
         * @param {api.IResJoinTable=} [properties] Properties to set
         */
        function ResJoinTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ResJoinTable instance using the specified properties.
         * @function create
         * @memberof api.ResJoinTable
         * @static
         * @param {api.IResJoinTable=} [properties] Properties to set
         * @returns {api.ResJoinTable} ResJoinTable instance
         */
        ResJoinTable.create = function create(properties) {
            return new ResJoinTable(properties);
        };

        /**
         * Encodes the specified ResJoinTable message. Does not implicitly {@link api.ResJoinTable.verify|verify} messages.
         * @function encode
         * @memberof api.ResJoinTable
         * @static
         * @param {api.IResJoinTable} message ResJoinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResJoinTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ResJoinTable message, length delimited. Does not implicitly {@link api.ResJoinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ResJoinTable
         * @static
         * @param {api.IResJoinTable} message ResJoinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResJoinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResJoinTable message from the specified reader or buffer.
         * @function decode
         * @memberof api.ResJoinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ResJoinTable} ResJoinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResJoinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ResJoinTable();
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
         * Decodes a ResJoinTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ResJoinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ResJoinTable} ResJoinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResJoinTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResJoinTable message.
         * @function verify
         * @memberof api.ResJoinTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResJoinTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ResJoinTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ResJoinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ResJoinTable} ResJoinTable
         */
        ResJoinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ResJoinTable)
                return object;
            return new $root.api.ResJoinTable();
        };

        /**
         * Creates a plain object from a ResJoinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ResJoinTable
         * @static
         * @param {api.ResJoinTable} message ResJoinTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResJoinTable.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ResJoinTable to JSON.
         * @function toJSON
         * @memberof api.ResJoinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResJoinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResJoinTable
         * @function getTypeUrl
         * @memberof api.ResJoinTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResJoinTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ResJoinTable";
        };

        return ResJoinTable;
    })();

    return api;
})();

export const test = $root.test = (() => {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    const test = {};

    test.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof test
         * @interface ITest
         * @property {string|null} [msg] Test msg
         */

        /**
         * Constructs a new Test.
         * @memberof test
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {test.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test msg.
         * @member {string} msg
         * @memberof test.Test
         * @instance
         */
        Test.prototype.msg = "";

        /**
         * Creates a new Test instance using the specified properties.
         * @function create
         * @memberof test.Test
         * @static
         * @param {test.ITest=} [properties] Properties to set
         * @returns {test.Test} Test instance
         */
        Test.create = function create(properties) {
            return new Test(properties);
        };

        /**
         * Encodes the specified Test message. Does not implicitly {@link test.Test.verify|verify} messages.
         * @function encode
         * @memberof test.Test
         * @static
         * @param {test.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link test.Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.Test
         * @static
         * @param {test.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @function decode
         * @memberof test.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.Test();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
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
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test message.
         * @function verify
         * @memberof test.Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test.Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test.Test} Test
         */
        Test.fromObject = function fromObject(object) {
            if (object instanceof $root.test.Test)
                return object;
            let message = new $root.test.Test();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test.Test
         * @static
         * @param {test.Test} message Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Test to JSON.
         * @function toJSON
         * @memberof test.Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Test
         * @function getTypeUrl
         * @memberof test.Test
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Test.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/test.Test";
        };

        return Test;
    })();

    return test;
})();

export { $root as default };
