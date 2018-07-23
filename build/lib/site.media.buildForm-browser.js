'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = buildFormData;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('wpcom:media');

/**
 * Build a formData object to be sent in a POST request
 *
 * @param  {Array|File} files - array of files
 * @return {Array} formData array
 */
/**
 * Module dependencies.
 */
function buildFormData(files) {
	var formData = [];
	var isArray = Array.isArray(files);
	files = isArray ? files : [files];

	var i = void 0,
	    f = void 0,
	    k = void 0,
	    param = void 0;
	for (i = 0; i < files.length; i++) {
		f = files[i];

		var isStream = !!f._readableState;
		var isFile = 'undefined' !== typeof File && f instanceof File;

		debug('isStream: %s', isStream);
		debug('isFile: %s', isFile);

		if (!isFile && !isStream) {
			// process file attributes like as `title`, `description`, ...
			for (k in f) {
				debug('add %o => %o', k, f[k]);
				if ('file' !== k) {
					param = 'attrs[' + i + '][' + k + ']';
					formData.push([param, f[k]]);
				}
			}
			// set file path
			f = f.file;
		}

		formData.push(['media[]', f]);
	}

	return formData;
}
module.exports = exports['default'];

//# sourceMappingURL=site.media.buildForm-browser.js.map