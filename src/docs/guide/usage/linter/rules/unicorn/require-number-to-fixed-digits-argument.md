<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/require-number-to-fixed-digits-argument <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Enforce using the digits argument with Number.toFixed()

### Why is this bad?

It's better to make it clear what the value of the digits argument is when calling Number.toFixed(),
instead of relying on the default value of 0.

### Examples

Examples of **incorrect** code for this rule:

```javascript
number.toFixed();
```

Examples of **correct** code for this rule:

```javascript
number.toFixed(0);
number.toFixed(2);
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/require_number_to_fixed_digits_argument.rs)