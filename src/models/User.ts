import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const result = await this.connection.execute('SELECT * FROM usuario');
    const [rows] = result;
    return rows as IUser[];
  }

  public async create(user: IUser): Promise<IUser> {
    const {nome, idade, email, senha} = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO usuario (nome, idade, email, senha) VALUES (?, ?, ?, ?)',
      [nome, idade, email, senha],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };

  }
}
