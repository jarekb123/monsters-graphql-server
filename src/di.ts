import { Container } from 'typedi';
import { MikroORM, EntityRepository } from 'mikro-orm';
import { User } from './user/user.types';

export const setupDI = (orm: MikroORM) => {
    Container.set(MikroORM, orm)
}