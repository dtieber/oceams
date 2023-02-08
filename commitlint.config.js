const LEVEL = {
    OFF: 0,
    WARN: 1,
    ERROR: 2,
}

const APPLICABLE = {
    ALWAYS: 'always',
    NEVER: 'never'
}

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [LEVEL.ERROR, APPLICABLE.ALWAYS, 100],
        'scope-enum': [LEVEL.ERROR, APPLICABLE.ALWAYS, ['ctc']],
        'scope-empty': [LEVEL.OFF]
    }
}