"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notebooks_controller_1 = require("./notebooks.controller");
const notebooks_service_1 = require("./notebooks.service");
const notebook_entity_1 = require("./entities/notebook.entity");
let NotebooksModule = class NotebooksModule {
};
exports.NotebooksModule = NotebooksModule;
exports.NotebooksModule = NotebooksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notebook_entity_1.Notebook])],
        controllers: [notebooks_controller_1.NotebooksController],
        providers: [notebooks_service_1.NotebooksService],
    })
], NotebooksModule);
//# sourceMappingURL=notebooks.module.js.map