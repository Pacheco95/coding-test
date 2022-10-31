import sys


class Node: pass


class Node:
    def __init__(self, value, children: list[Node] = None):
        self.children = children or []
        self.value = value

    def __eq__(self, other: Node) -> bool:
        return self.value == other.value

    def __str__(self) -> str:
        return str(self.value)

    def __repr__(self) -> str:
        return str(self.value)

    def __hash__(self) -> int:
        return hash(self.value)


def traverse(root: Node, first_iteration=True):
    if first_iteration:
        yield root
        first_iteration = False

    for child in root.children:
        yield child

    for child in root.children:
        yield from traverse(child, first_iteration)


def get_path(root: Node, target: Node) -> list[Node]:
    """
    Can be improved with memoization techniques
    """

    def get_path_recursively(current_node: Node, path_so_far: list[Node]) -> list[Node]:
        path_so_far.append(current_node)

        if current_node == target:
            return path_so_far

        if not current_node.children:
            path_so_far.pop()
            return path_so_far

        for child in current_node.children:
            get_path_recursively(child, path_so_far)

            if path_so_far[-1] == target:
                return path_so_far

        path_so_far.pop()

        return path_so_far

    path = []

    get_path_recursively(root, path)

    return path


def get_lower_common_ancestor(path_node_a: list[Node], path_node_b: list[Node]) -> Node | None:
    min_len = min(len(path_node_a), len(path_node_b))

    common_root = None

    for i in range(min_len):
        if path_node_a[i] == path_node_b[i]:
            common_root = path_node_a[i]
        else:
            return common_root

    return common_root


def distance(root: Node, a: Node, b: Node):
    path_to_a = get_path(root, a)
    path_to_b = get_path(root, b)

    failure = False

    if not path_to_a:
        print(f"Tree does not contains node {a}", file=sys.stderr)
        failure = True

    if not path_to_b:
        print(f"Tree does not contains node {b}", file=sys.stderr)
        failure = True

    if failure:
        exit(1)

    print(f"Path from root ({root}) to {a}: {path_to_a}")
    print(f"Path from root ({root}) to {b}: {path_to_b}")

    lca = get_lower_common_ancestor(path_to_a, path_to_b)

    print(f"Lower common ancestor (LCA) between {a} and {b}: {lca}")

    path_lca_a = get_path(lca, a)
    path_lca_b = get_path(lca, b)

    print(f"Path from LCA ({lca}) and {a}: {path_lca_a}")
    print(f"Path from LCA ({lca}) and {b}: {path_lca_b}")

    dist_lca_a = len(path_lca_a) - 1
    dist_lca_b = len(path_lca_b) - 1

    min_distance_between_a_and_b = dist_lca_a + dist_lca_b

    print(f"Minimum distance between {a} and {b}: ", min_distance_between_a_and_b)


if __name__ == '__main__':
    ref_img = "https://media.geeksforgeeks.org/wp-content/uploads/20190612120758/generic-tree_gfg.png"

    print("This example was based on this reference tree", ref_img, flush=True)
    print("Change the values of 'a' and 'b' variables to test other scenarios", flush=True)
    print(f"{'='*100}", flush=True)

    root = Node("A",
                [Node("B", []),
                 Node("C",
                      [Node("H")]),
                 Node("D",
                      [Node("I"), Node("J")]),
                 Node("E", []),
                 Node("F", []),
                 Node("G",
                      [Node("K")])])

    print("Traverse:", list(traverse(root)), flush=True)

    a = Node("D")
    b = Node("K")

    distance(root, a, b)
