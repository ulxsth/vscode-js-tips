const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "vscode-js-tips" is now active!');

	let disposable = vscode.commands.registerCommand('vscode-js-tips.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from vscode-js-tips!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
