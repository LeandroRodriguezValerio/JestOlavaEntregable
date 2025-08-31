import { Repository } from 'typeorm';
import { Notebook } from './entities/notebook.entity';
import { CreateNotebookDto } from './dto/create-notebook.dto';
export declare class NotebooksService {
    private readonly notebookRepo;
    constructor(notebookRepo: Repository<Notebook>);
    findAll(): Promise<Notebook[]>;
    create(dto: CreateNotebookDto): Promise<Notebook>;
}
