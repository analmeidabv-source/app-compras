(function (global) {
    global.QCSHOP_APP_INFO = {
        appName: 'QCShop',
        description: 'Gestão de Compras',
        version: '1.0.1',
        lastUpdated: '2026-08-14',
        swCacheName: 'qcshop-v1.0.1',
        company: 'Fresenius Kabi',
        developers: ['Ana Almeida', 'Mariana Moniz'],
        copyrightYear: 2026,
        changelog: [
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