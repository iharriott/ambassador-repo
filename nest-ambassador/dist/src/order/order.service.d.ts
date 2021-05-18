import { Repository } from 'typeorm';
import { AbstractService } from '../shared/abstract.service';
import { Order } from './order';
export declare class OrderService extends AbstractService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
}
