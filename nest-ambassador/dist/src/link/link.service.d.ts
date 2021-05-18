import { Repository } from 'typeorm';
import { AbstractService } from '../shared/abstract.service';
import { Link } from './link';
export declare class LinkService extends AbstractService {
    private readonly linkRepository;
    constructor(linkRepository: Repository<Link>);
}
