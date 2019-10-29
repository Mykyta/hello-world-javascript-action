"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const fs_1 = require("fs");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = core.getInput('files');
            const fileList = files.split(/,\s+/);
            var doesntExist = [];
            fileList.forEach(function (file) {
                if (!fs_1.default.existsSync(file)) {
                    doesntExist.push(file);
                }
            });
            if (doesntExist.length > 0) {
                core.setFailed("These files do not exist: " + doesntExist.join(", "));
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
