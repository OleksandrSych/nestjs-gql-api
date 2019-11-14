import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from '../common/config/databaseConfig';
import { IDatabaseConfigAttributes } from '../common/config/interfaces/IDatabase';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config: IDatabaseConfigAttributes;

      switch (process.env.NODE_ENV) {
        case 'prod':
          config = databaseConfig.prod;
          break;
        case 'dev':
          config = databaseConfig.dev;
          break;
        default:
          config = databaseConfig.dev;
      }

      const sequelize = new Sequelize({
        ...config,
        modelPaths: [__dirname + '/../**/*.model.js'],
        modelMatch: (filename, member) => {
          return (
            filename.substring(0, filename.indexOf('.model')) ===
            member.toLowerCase()
          );
        },
        define: {
          timestamps: false,
        },
      });
      const force: boolean = false;
      await sequelize.sync({ force });
      return sequelize;
    },
  },
];