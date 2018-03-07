import * as $protobuf from "protobufjs";

/** Namespace ctt. */
export namespace ctt {

    /** Properties of a ClientInfo. */
    interface IClientInfo {

        /** ClientInfo x */
        x?: (number|null);

        /** ClientInfo y */
        y?: (number|null);
    }

    /** Represents a ClientInfo. */
    class ClientInfo implements IClientInfo {

        /**
         * Constructs a new ClientInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ctt.IClientInfo);

        /** ClientInfo x. */
        public x: number;

        /** ClientInfo y. */
        public y: number;

        /**
         * Creates a new ClientInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientInfo instance
         */
        public static create(properties?: ctt.IClientInfo): ctt.ClientInfo;

        /**
         * Encodes the specified ClientInfo message. Does not implicitly {@link ctt.ClientInfo.verify|verify} messages.
         * @param message ClientInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ctt.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link ctt.ClientInfo.verify|verify} messages.
         * @param message ClientInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ctt.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ctt.ClientInfo;

        /**
         * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ctt.ClientInfo;

        /**
         * Verifies a ClientInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientInfo
         */
        public static fromObject(object: { [k: string]: any }): ctt.ClientInfo;

        /**
         * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
         * @param message ClientInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ctt.ClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
