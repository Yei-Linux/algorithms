import { CustomError } from '../core/dtos/CustomError.dto.js';

export class CrudDao {
  model;

  constructor(model) {
    this.model = model;
  }

  async create(payload) {
    const response = await this.model.create(payload);
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async getOne(id) {
    const response = await this.model.findByPk(id);
    if (!response) throw CustomError.notFound('Resource not found');
    return response;
  }

  async udpdate(id, payload) {
    const response = await this.model.update(payload, { where: { id } });
    return response;
  }

  async delete(id) {
    await this.model.destroy({
      where: { id },
    });
  }
}
