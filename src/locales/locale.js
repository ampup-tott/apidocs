define([
    './src/locales/ca.js',
    './src/locales/cs.js',
    './src/locales/de.js',
    './src/locales/es.js',
    './src/locales/fr.js',
    './src/locales/it.js',
    './src/locales/nl.js',
    './src/locales/pl.js',
    './src/locales/pt_br.js',
    './src/locales/ro.js',
    './src/locales/ru.js',
    './src/locales/tr.js',
    './src/locales/vi.js',
    './src/locales/zh.js',
    './src/locales/zh_cn.js'
], function() {
    var langId = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '_');
    var language = langId.substr(0, 2);
    var locales = {};

    for (index in arguments) {
        for (property in arguments[index])
            locales[property] = arguments[index][property];
    }
    if ( ! locales['en'])
        locales['en'] = {};

    if ( ! locales[langId] && ! locales[language])
        language = 'en';

    var locale = (locales[langId] ? locales[langId] : locales[language]);

    function __(text) {
        var index = locale[text];
        if (index === undefined)
            return text;
        return index;
    };

    function setLanguage(language) {
        locale = locales[language];
    }

    return {
        __         : __,
        locales    : locales,
        locale     : locale,
        setLanguage: setLanguage
    };
});
