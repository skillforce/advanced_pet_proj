import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example : isArticleEnabled
const featureState = process.argv[3]; // example off/on

if (!removedFeatureName) {
    throw Error('No feature name provided');
}
if (!featureState) {
    throw Error('No feature state provided(on/off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw Error('Not correct feature state provided(should be on/off)');
}

const project = new Project();

// get all required files to refactor/checking
project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.tsx');

// write all these files in variable
const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    function isToggleFunction(node: Node) {
        let isToggleFeatures = false;
        node.forEachChild((child) => {
            if (child) {
                if (
                    child.isKind(SyntaxKind.Identifier) &&
                    child.getText() === 'toggleFeatures'
                ) {
                    isToggleFeatures = true;
                }
            }
        });
        return isToggleFeatures;
    }

    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );
            if (!objectOptions) return;

            const nameFeatureProperty = objectOptions.getProperty('name');

            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            const featureName = nameFeatureProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;
            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
