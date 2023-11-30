/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/win-11/uv/service/',
    bare: 'https://8080-cs-94d1cc2f-e1f5-403c-9097-df9e51bdf485.cs-us-east1-pkhd.cloudshell.dev/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/win-11/uv/uv.handler.js',
    client: '/win-11/uv/uv.client.js',
    bundle: '/win-11/uv/uv.bundle.js',
    config: '/win-11/uv/uv.config.js',
    sw: '/win-11/uv/uv.sw.js',
};
