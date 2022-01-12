const normalizedPath = require("path").join(__dirname);
const files = require("fs").readdirSync(normalizedPath).filter((file) => file !== 'index.js');

let configs = {};

files.forEach((config) => {
    config = config.replace('.js', '');
    configs[config] = require(`./${config}`)
});

function get(path, defaultVal = '') {
    const parts = path.split('.');
    let config = configs;

    try {
        for (const configKey of parts) {
            config = config[configKey];
        }
    } catch {
        return defaultVal;
    }

    return config;
}

module.exports = {
    get
};
