export const anyToUint8Array = (data: any): Uint8Array => {
    data += '';
    const l = data.length;
    const buffer = new Uint8Array(l);
    for (let i = 0; i < l; ++i) {
        buffer[i] = data[i].charCodeAt(0);
    }
    return buffer;
};
