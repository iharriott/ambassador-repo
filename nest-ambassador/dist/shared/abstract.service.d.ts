import { Repository } from "typeorm";
export declare abstract class AbstractService {
    protected readonly repository: Repository<any>;
    constructor(repository: Repository<any>);
    find(options?: {}): Promise<any[]>;
    save(options: any): Promise<any>;
    findOne(options: any): Promise<any>;
    update(id: number, options: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
