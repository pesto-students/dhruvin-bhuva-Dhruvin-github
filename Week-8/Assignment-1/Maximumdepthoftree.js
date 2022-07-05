


const BinaryTree = function () {

    let _root = null;
    let countLeft = 0;
    let countRitht = 0;


    const _insert = (root, value) => {
        if (value != null) {


            if (root == null) {
                root = { value, right: null, left: null }
            }
            else if (value < root.value) {
                root.left = _insert(root.left, value);
            }
            else if (value > root.value) {
                root.right = _insert(root.right, value);
            }

        }
        return root;

    }


    this.insert = function (...values) {
        for (let value of values)
            _root = _insert(_root, value);
    }


    this.findMaxDepthLeft = (root) => {
        if (root == null) {
            return 0
        }
        else if (root.left) {
            countLeft++;
            this.findMaxDepthLeft(root.left);
        } else if (root.right) {
            countLeft++;
            this.findMaxDepthLeft(root.right);
        }
        return countLeft;
    }

    this.findMaxDepthRight = (root) => {
        if (root == null) {
            return 0
        }
        else if (root.right) {
            countRitht++;
            this.findMaxDepthRight(root.right);
        } else if (root.left) {
            countRitht++;
            this.findMaxDepthRight(root.left);
        }
        return countRitht;
    }

    this.maxDepth = function (...value) {
        this.insert(...value);

        var leftDepth = this.findMaxDepthLeft(_root);
        var RithtDepth = this.findMaxDepthRight(_root);

        return (Math.max(leftDepth, RithtDepth) + 1)

    }

}

let tree = new BinaryTree();

// let items= [12, 22,  8, 18,  14,  6,  2, 30, 9, 22, 5, 20,  4,32,33,34,35];
let items = [3, 9, 20, null, null, 15, 7];

console.log(tree.maxDepth(...items));

