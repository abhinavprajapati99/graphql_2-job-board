import { connection } from './connection.js';

const getCompanyTable = () => connection.table('company');

export async function getCompany(id) {
  const data = await getCompanyTable().first().where({ id });
  return await getCompanyTable().first().where({ id });
}
