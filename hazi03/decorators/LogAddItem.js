"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAddItem = LogAddItem;
function LogAddItem(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Adding item...`);
        originalMethod.apply(this, args);
    };
}
