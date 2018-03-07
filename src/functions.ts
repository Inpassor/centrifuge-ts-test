export const anyToUint8Array = (data: any): Uint8Array => {
    data += '';
    const buffer = new Uint8Array(data.length);
    Array.prototype.forEach.call(data, (c, i) => buffer[i] = c.charCodeAt(0));
    return buffer;
};
