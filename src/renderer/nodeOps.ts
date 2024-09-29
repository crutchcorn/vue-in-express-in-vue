import { RendererOptions } from "@vue/runtime-core";

export type CustomNode = {
  parent?: CustomNode;
  children: CustomNode[];
};

export function createNode(opts?: Partial<CustomNode>): CustomNode {
  return Object.assign(
    {
      children: [],
    },
    opts
  );
}

export const nodeOps: RendererOptions<CustomNode, CustomNode> = {
  insert: (child, parent, _anchor) => {
    child.parent = parent;
    parent.children.push(child);
  },

  remove: (child) => {
    if (child.parent) {
      child.parent.children = child.parent.children.filter((c) => c !== child);
      delete child.parent;
    }
  },

  createElement: (_tag, _isSVG, _is, _props): CustomNode => {
    return createNode();
  },

  createText: (_text) => createNode(),

  createComment: (_text) => createNode(),

  setText: (_node, _text) => {},

  setElementText: (_el, _text) => {},

  parentNode: (node) => node.parent ?? null,

  nextSibling: (node) => {
    for (let i = 0; i < (node.parent?.children ?? []).length; i++) {
      if (node.parent?.children[i] === node)
        return node.parent?.children[i + 1];
    }
    return null;
  },

  querySelector: (_selector) => null,

  setScopeId(_el, _id) {},

  cloneNode(el) {
    return createNode(el);
  },

  insertStaticContent(_content, _parent, _anchor, _isSVG, _start, _end) {
    const newNode = createNode();
    return [newNode, newNode];
  },

  patchProp(
    _el,
    _key,
    _prevValue,
    _nextValue,
    _namespace,
    _parentComponent
  ) {},
};
