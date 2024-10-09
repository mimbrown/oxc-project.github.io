<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-non-null-asserted-nullish-coalescing <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow non-null assertions in the left operand of a nullish coalescing operator.

### Why is this bad?

The ?? nullish coalescing runtime operator allows providing a default value when dealing with null or undefined. Using a ! non-null assertion type operator in the left operand of a nullish coalescing operator is redundant, and likely a sign of programmer error or confusion over the two operators.

### Example

```ts
foo! ?? bar;

let x: string;
x! ?? "";
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_nullish_coalescing.rs)