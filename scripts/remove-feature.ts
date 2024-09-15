import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example : isArticleEnabled
const featureState = process.argv[3]; // example off/on

const toggleFuncionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

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

const replaceToggleFunction = (node: Node) => {
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
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
    jsxAttributes.find((node) => node.getNameNode()?.getText() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removedFeatureName) return;

    const offValue = getReplacedComponent(offAttribute);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    function isToggleFunction(node: Node) {
        let isToggleFeatures = false;
        node.forEachChild((child) => {
            if (child) {
                if (
                    child.isKind(SyntaxKind.Identifier) &&
                    child.getText() === toggleFuncionName
                ) {
                    isToggleFeatures = true;
                }
            }
        });
        return isToggleFeatures;
    }

    function isToggleComponent(node: Node) {
        const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
        return identifier?.getText() === toggleComponentName;
    }

    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }
        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceComponent(node);
        }
    });
});

project.save();
