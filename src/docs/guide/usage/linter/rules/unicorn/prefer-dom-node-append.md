<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-dom-node-append <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Enforces the use of, for example, `document.body.append(div);` over `document.body.appendChild(div);` for DOM nodes.

### Why is this bad?

There are [some advantages of using `Node#append()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append), like the ability to append multiple nodes and to append both [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) and DOM node objects.

### Examples

Examples of **incorrect** code for this rule:

```javascript
foo.appendChild(bar);
```

Examples of **correct** code for this rule:

```javascript
foo.append(bar);
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_append.rs)