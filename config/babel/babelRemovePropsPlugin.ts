import { PluginItem } from '@babel/core';

export default function ():PluginItem {
    return {
        visitor: {
            Program(path, state) {
                // forbidden variable should contain array of attributes that should be removed
                const forbidden = state.opts.props || [];
                // traverse is a method which go throw all branches of nodes, and we can somehow impact on them
                path.traverse({
                    // JSXIdentifier is data-attribute node in AST of JSX element
                    JSXIdentifier(currentNode) {
                        const nodeName = currentNode.node.name;
                        if (forbidden.includes(nodeName)) {
                            // remove JSXIdentifier node if it included in forbidden nodes list
                            currentNode.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
