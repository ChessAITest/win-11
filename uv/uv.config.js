/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/win-11/uv/service/',
    bare: 'https://stackblitzstarterssjvkbt-vfou--8080--95086023.local-corp.webcontainer.io/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/win-11/uv/uv.handler.js',
    client: '/win-11/uv/uv.client.js',
    bundle: '/win-11/uv/uv.bundle.js',
    config: '/win-11/uv/uv.config.js',
    sw: '/win-11/uv/uv.sw.js',
};
