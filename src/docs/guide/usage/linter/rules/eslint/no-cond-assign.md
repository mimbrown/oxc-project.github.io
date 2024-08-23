<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-cond-assign <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow assignment operators in conditional expressions

### Why is this bad?

In conditional statements, it is very easy to mistype a comparison
operator (such as `==`) as an assignment operator (such as `=`).

There are valid reasons to use assignment operators in conditional
statements. However, it can be difficult to tell whether a specific
assignment was intentional.

### Example

```js
// Check the user's job title
if ((user.jobTitle = "manager")) {
  // user.jobTitle is now incorrect
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_cond_assign.rs)