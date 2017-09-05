# Tetsuo

**fatigue but skeleton.**

<img src="http://68.media.tumblr.com/4a9fe55d28eadd0ca27bd328c7414d81/tumblr_mnkzxq6gzT1sn2pi2o1_1280.jpg" style="width:100%" />

### travis

1. **prepare**

```yml
language: node_js
node_js:
- '8'
after_success:
- yarn coverage # nyc report coverage to coveralls
```

2. **modify**
   1. `travis setup npm` because set latter, `api_key` is left as empty.
   2. `yarn config list` copy `'_authToken': '8-4-4-12'`
   3. `travis encrypt 8-4-4-12 --add deploy.api_key` added

### publish new
**complete on github.**
1. edit `version` in `package.json`
2. create new `tag` and `release`
3. `travisci` publish new

## devDependencies

* [`flowtype`](https://github.com/facebook/flow)
    * [libdef](https://flow.org/en/docs/libdefs/#whats-a-library-definition-a-classtoc-idtoc-what-s-a-library-definition-hreftoc-what-s-a-library-definitiona)
    > If a third-party library that has no type information is used by your project, Flow will treat it like any other untyped dependency and mark all of its exports as any. Interestingly, this is the only place that Flow will implicitly inject any into your program.
    >
    > Because of this behavior, it is a best practice to find or write libdefs for as many of the third-party libraries that you use as you can. We recommend checking out the flow-typed tool and repository , which helps you quickly find and install pre-existing libdefs for your third-party dependencies.

* [`mocha`](https://github.com/mochajs/mocha)

    * [`power-assert`](https://github.com/power-assert-js/power-assert)

* [`coveralls`](https://github.com/nickmerwin/node-coveralls)
    * [`nyc`](https://github.com/istanbuljs/nyc)

* [`prettier`](https://github.com/prettier/prettier)
    * [`lint-staged`](https://github.com/okonet/lint-staged)
    * [`husky`](https://github.com/typicode/husky)

    > You can use Prettier with a pre-commit tool. This can re-format your files that are marked as "staged" via git add before you commit.
    https://github.com/prettier/prettier#pre-commit-hook

* [`babel`](https://github.com/babel/babel)

`babel` is the core/infrastructure.

The language written in this skeleton is just like **`BlowScript`**. (`babel` + `flow`)

![](./blow.png)

**and never use `eslint`.**
> [Why linting makes me yawn](https://medium.com/@Jakeherringbone/why-linting-makes-me-yawn-cadbd9a51ca9)
>
> the linter doesn’t run in every place the compiler runs. **The only satisfactory solution "we found"** is, always run this kind of “100% incorrect” lint check along with the compiler. That means red underlines in the editor, command-line build fails, continuous integration fails, and the engineer who insists on using a totally different dev environment sees it too.
>
> This is where I question having a separate linter tool. When should I run the linter? Should it force me to move curly braces around while I’m hacking away? Should I be stopped before running the build and test suite because of some stray whitespace? Will everyone on my team run it, or will Bob say “oh, yeah, that curly brace is on the end of line 34 because I didn’t run the linter on my change.” (Then I fix it and line 34 is forever blamed to the wrong person.) Because of the useless formatting checks, we want to defer getting a stack of warnings until we “clean up the code someday.” But for the 100% incorrectness checks, we want them right there next to the type checker, and enforced for everyone.
>
> My conclusion for 100% incorrectness issues: add them to the compiler.
