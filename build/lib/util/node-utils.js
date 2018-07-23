'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeFilenameToStream = nodeFilenameToStream;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// On Node.js, support converting a filename to a stream.
function nodeFilenameToStream(filename) {
  return _fs2.default.createReadStream(filename);
} /**
   * Module dependencies.
   */

//# sourceMappingURL=node-utils.js.map