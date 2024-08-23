<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/no-aria-hidden-on-focusable <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Enforces that `aria-hidden="true"` is not set on focusable elements.

### Why is this bad?

`aria-hidden="true"` on focusable elements can lead to confusion or unexpected behavior for screen reader users.

### Example

```jsx
// Bad
<div aria-hidden="true" tabIndex="0" />

// Good
<div aria-hidden="true" />
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/no_aria_hidden_on_focusable.rs)