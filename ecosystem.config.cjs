// ecosystem.config.cjs
module.exports = {
    apps: [
        {
            name: 'alu-win',
            script: './node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/var/www/alu-win/src-react',
            env: {
                PORT: 3005,
                NODE_ENV: 'production',
            },
        },
    ],
};
