import { NotebooksService } from './notebooks.service';
import { CreateNotebookDto } from './dto/create-notebook.dto';
import { Notebook } from './entities/notebook.entity';
export declare class NotebooksController {
    private readonly notebooksService;
    constructor(notebooksService: NotebooksService);
    findAll(): Promise<Notebook[]>;
    create(createNotebookDto: CreateNotebookDto): Promise<Notebook>;
}
