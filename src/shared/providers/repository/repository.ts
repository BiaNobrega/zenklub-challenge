import { Logger } from '@nestjs/common';
import { Document, Model } from 'mongoose';

export abstract class Repository<T extends Document> {
  private modelInstance: Model<T, {}>;
  constructor(model: Model<T, {}>) {
    this.modelInstance = model;
  }

  public async findAll(fields?: string): Promise<T[]> {
    try {
      return this.model.find({}, fields);
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  public async add(document: T): Promise<T> {
    try {
      return await this.model.create(document);
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  public async findById(id: string, fields?: string): Promise<T> {
    try {
      return this.model.findOne({ _id: id }, fields);
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  public update(id: string, document: T) {
    try {
      return this.model
        .updateOne({ _id: id }, { $set: document }, { new: true })
        .exec();
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  public remove(id: string) {
    try {
      return this.model.deleteOne({ _id: id }).exec();
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  public findByParams(params: any): Promise<T[]> {
    try {
      return this.model.find(params).exec();
    } catch (error) {
      Logger.error(error, undefined, Repository.name);
      throw error;
    }
  }

  protected get model(): Model<T> {
    return this.modelInstance;
  }
}
