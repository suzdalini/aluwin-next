module.exports = {
    apps: [
        {
            name: 'alu-win',
            script: 'yarn',
            args: 'start',
            cwd: '/var/www/alu-win/src-react',
            interpreter: '/bin/bash',
            env: {
                PORT: 3005,
                NODE_ENV: 'production',
            },
        },
    ],
};
