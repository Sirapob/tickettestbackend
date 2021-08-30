const SOURCE_PATH = 'src';

module.exports = {
    type: 'sqlite',
    database: 'ciam.sqlite',
    entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
    synchronize: true,
    logging: true,
};