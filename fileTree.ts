type FileNode = {
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[]; // Only folders will have children
};

const fileTree: FileNode = {
    name: 'zzzzzzz',
    type: 'folder',
    children: [
        {
            name: 'src',
            type: 'folder',
            children: [
                { name: 'index.ts', type: 'file' },
                { name: 'app.ts', type: 'file' },
            ],
        },
        {
            name: 'README.md',
            type: 'file',
        },
        {
            name: 'package.json',
            type: 'file',
        },
    ],
};

function printTree(node: FileNode, indent: string = ''): void {
    console.log(`${indent}${node.type === 'folder' ? '📂' : '📄'} ${node.name}`);
    if (node.type === 'folder' && node.children) {
        for (const child of node.children) {
            printTree(child, indent + '  ');
        }
    }
}

// Example usage
printTree(fileTree);
