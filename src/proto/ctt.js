/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.ctt = (function() {
    
        /**
         * Namespace ctt.
         * @exports ctt
         * @namespace
         */
        var ctt = {};
    
        ctt.ClientInfo = (function() {
    
            /**
             * Properties of a ClientInfo.
             * @memberof ctt
             * @interface IClientInfo
             * @property {number|null} [x] ClientInfo x
             * @property {number|null} [y] ClientInfo y
             */
    
            /**
             * Constructs a new ClientInfo.
             * @memberof ctt
             * @classdesc Represents a ClientInfo.
             * @implements IClientInfo
             * @constructor
             * @param {ctt.IClientInfo=} [properties] Properties to set
             */
            function ClientInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ClientInfo x.
             * @member {number} x
             * @memberof ctt.ClientInfo
             * @instance
             */
            ClientInfo.prototype.x = 0;
    
            /**
             * ClientInfo y.
             * @member {number} y
             * @memberof ctt.ClientInfo
             * @instance
             */
            ClientInfo.prototype.y = 0;
    
            /**
             * Creates a new ClientInfo instance using the specified properties.
             * @function create
             * @memberof ctt.ClientInfo
             * @static
             * @param {ctt.IClientInfo=} [properties] Properties to set
             * @returns {ctt.ClientInfo} ClientInfo instance
             */
            ClientInfo.create = function create(properties) {
                return new ClientInfo(properties);
            };
    
            /**
             * Encodes the specified ClientInfo message. Does not implicitly {@link ctt.ClientInfo.verify|verify} messages.
             * @function encode
             * @memberof ctt.ClientInfo
             * @static
             * @param {ctt.IClientInfo} message ClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
                return writer;
            };
    
            /**
             * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link ctt.ClientInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ctt.ClientInfo
             * @static
             * @param {ctt.IClientInfo} message ClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ClientInfo message from the specified reader or buffer.
             * @function decode
             * @memberof ctt.ClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ctt.ClientInfo} ClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ctt.ClientInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.uint32();
                        break;
                    case 2:
                        message.y = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ctt.ClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ctt.ClientInfo} ClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ClientInfo message.
             * @function verify
             * @memberof ctt.ClientInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                return null;
            };
    
            /**
             * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ctt.ClientInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ctt.ClientInfo} ClientInfo
             */
            ClientInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.ctt.ClientInfo)
                    return object;
                var message = new $root.ctt.ClientInfo();
                if (object.x != null)
                    message.x = object.x >>> 0;
                if (object.y != null)
                    message.y = object.y >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ctt.ClientInfo
             * @static
             * @param {ctt.ClientInfo} message ClientInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = message.y;
                return object;
            };
    
            /**
             * Converts this ClientInfo to JSON.
             * @function toJSON
             * @memberof ctt.ClientInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ClientInfo;
        })();
    
        return ctt;
    })();

    return $root;
});
