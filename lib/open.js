var exec = require('child_process').exec, 
  path = require('path'),
	platform = {
		'darwin': 'open',
		'win32' : 'start ""',
		'linux' : path.join(__dirname, '../vendor/xdg-open')
	},
	opener = platform[ process.platform ] || platform.linux;

/**
 * open a file or uri using the default application for the file type.
 *
 * @return {ChildProcess} - the child process object.
 * @param {string} target - the file/uri to open.
 * @param {function(Error)} callback - called with null on success, or
 *      an error object that contains a property 'code' with the exit
 *      code of the process.
 */	
module.exports = function open(target, callback) {
	if(target){
		target = (''+target).replace(/"/g, '\\\"');
		return exec(opener + ' "' + target + '"', callback);
	}
};