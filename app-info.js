(function (global) {
    global.QCSHOP_APP_INFO = {
        appName: 'QCShop',
        description: 'Gestão de Compras',
        version: '1.0.3',
        lastUpdated: '2026-08-17',
        swCacheName: 'qcshop-v1.0.3',
        swRelease: '1.0.3',
        company: 'Fresenius Kabi',
        developers: ['Ana Almeida', 'Mariana Moniz'],
        copyrightYear: 2026,
        changelog: [
            {
                version: '1.0.3',
                date: '2026-08-17',
                summary: 'Refresh dos alertas de Budget após guardar e persistência do Remover nas aprovações de produtos.'
            },
            {
                version: '1.0.2',
                date: '2026-08-17',
                summary: 'Correção do mecanismo de cache/atualização da PWA: deteção fiável de novas versões publicadas.'
            },
            {
                version: '1.0.1',
                date: '2026-08-14',
                summary: 'Sistema central de versões (app-info.js), janela Sobre, rodapé de versão e atualização automática da PWA.'
            },
            {
                version: '1.0.0',
                date: '2026-08-14',
                summary: 'Lançamento inicial da QCShop.'
            }
        ]
    };

    global.QCSHOP_VERSION = global.QCSHOP_APP_INFO;
})(typeof self !== 'undefined' ? self : window);