"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsModule = void 0;
const common_1 = require("@nestjs/common");
const tests_resolvers_1 = require("./tests.resolvers");
const tests_service_1 = require("./tests.service");
let TestsModule = class TestsModule {
};
TestsModule = __decorate([
    common_1.Module({
        providers: [tests_resolvers_1.TestsResolvers, tests_service_1.TestsService],
    })
], TestsModule);
exports.TestsModule = TestsModule;
//# sourceMappingURL=tests.module.js.map