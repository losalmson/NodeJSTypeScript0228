import { Model, CreationOptional,InferAttributes, InferCreationAttributes,DataTypes } from 'sequelize';
 
//exportera en klass!

  export class Player extends Model<InferAttributes<Player, {  }>, InferCreationAttributes<Player, {  }>> { // Om man vill att saker t.ex. ska heta en sak här o en annan i databasen!
    declare id: CreationOptional<number>; // Default-värden!
    declare name: string;
    declare team: string | null;
 
     // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
 
    // other attributes...
  }