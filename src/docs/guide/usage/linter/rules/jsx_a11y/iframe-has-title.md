<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsx_a11y/iframe-has-title <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Enforce iframe elements have a title attribute.

### Why is this necessary?

Screen reader users rely on a iframe title to describe the contents of the iframe.
Navigating through iframe and iframe elements quickly becomes difficult and confusing for users of this technology if the markup does not contain a title attribute.

### What it checks

This rule checks for title property on iframe element.

### Example

```jsx
// Bad
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />

// Good
<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/iframe_has_title.rs)