"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksController = void 0;
const common_1 = require("@nestjs/common");
const notebooks_service_1 = require("./notebooks.service");
const create_notebook_dto_1 = require("./dto/create-notebook.dto");
let NotebooksController = class NotebooksController {
    notebooksService;
    constructor(notebooksService) {
        this.notebooksService = notebooksService;
    }
    async findAll() {
        try {
            return await this.notebooksService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Error retrieving notebooks', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createNotebookDto) {
        try {
            return await this.notebooksService.create(createNotebookDto);
        }
        catch (error) {
            throw new common_1.HttpException('Error creating notebook', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.NotebooksController = NotebooksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotebooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notebook_dto_1.CreateNotebookDto]),
    __metadata("design:returntype", Promise)
], NotebooksController.prototype, "create", null);
exports.NotebooksController = NotebooksController = __decorate([
    (0, common_1.Controller)('notebooks'),
    __metadata("design:paramtypes", [notebooks_service_1.NotebooksService])
], NotebooksController);
//# sourceMappingURL=notebooks.controller.js.map