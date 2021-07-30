import { EntityRepository, Repository } from 'typeorm'
import { FertilizerItem } from '../entity/fertilizer-item.entity'

@EntityRepository(FertilizerItem)
export class FertilizerItemRepository extends Repository<FertilizerItem> {}
