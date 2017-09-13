# Tetsuo
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/kthjm/tetsuo.svg?branch=master)](https://travis-ci.org/kthjm/tetsuo)
[![Coverage Status](https://coveralls.io/repos/github/kthjm/tetsuo/badge.svg?branch=master)](https://coveralls.io/github/kthjm/tetsuo?branch=master)

**fatigue but skeleton.**

<img src="http://68.media.tumblr.com/4a9fe55d28eadd0ca27bd328c7414d81/tumblr_mnkzxq6gzT1sn2pi2o1_1280.jpg" style="width:100%" />

## devDependencies

* [`flow`](https://github.com/facebook/flow)

* [`mocha`](https://github.com/mochajs/mocha)

    * [`power-assert`](https://github.com/power-assert-js/power-assert)

    * [`nyc`](https://github.com/istanbuljs/nyc)

    * [`travis`](https://travis-ci.org/)

    * [`coveralls`](https://github.com/nickmerwin/node-coveralls)

* [`prettier`](https://github.com/prettier/prettier)

    * [`lint-staged`](https://github.com/okonet/lint-staged)

    * [`husky`](https://github.com/typicode/husky)

* [`babel`](https://github.com/babel/babel)

**`babel`** is used `build` and `test` so it is the core.

<!-- The language written in this skeleton is just like **`BlowScript`**. (`babel` + `flow`) -->

<!-- ![](./blow.png) -->

## travis

prepare or `travis init`

```yml
language: node_js
node_js:
- '8'
after_success:
- yarn coverage # nyc report coverage to coveralls
```
1.inject `deploy` property. Since it will be set later, `api_key` remain blank.

```bash
travis setup npm
```
2.copy from `'_authToken': '8-4-4-4-12'`

```bash
yarn config list
```
3.add `api_key`
```bash
travis encrypt 8-4-4-4-12 --add deploy.api_key
```

[npm Releasing](https://docs.travis-ci.com/user/deployment/npm/)

## publish new
**complete on github.** (no need `git pull`)
1. edit `version` in `package.json`
2. create new `tag` and `release`
3. `travisci` publish new

## nyc and mocha
project using `flow` and `power-assert`, tests need `babel-register` as compiler.
And i think there is a danger of duplication.

* **mocha:**
[`--compilers`](https://mochajs.org/#--compilers)
* **nyc:**
[Use with `babel-plugin-istanbul` for Babel Support](https://github.com/istanbuljs/nyc#use-with-babel-plugin-istanbul-for-babel-support)

**solution:** if config `nyc.require: ["babel-register"]`, no need `mocha.opts` to inform `--compiler js:babel-register`.

#### points
* use `babel-plugin-istanbul`
* `NODE_ENV === "test"`

use `env` property in babel config and [`cross-env`](https://github.com/kentcdodds/cross-env).

## power-assert and rewire
[`babel-plugin-rewire` breaks `babel-preset-power-assert` #180](https://github.com/speedskater/babel-plugin-rewire/issues/180)

## regenerator-runtime
only use `build`.
no need in `test`.

[Node 7.6 Brings Default Async/Await Support](https://www.infoq.com/news/2017/02/node-76-async-await)

## prettier
[--with-node-modules](https://github.com/prettier/prettier#--with-node-modules)
> Prettier CLI will ignore files located in node_modules directory. To opt-out from this behavior use --with-node-modules flag.

list `.prettierignore` that exclude `node_modules`. (e.g.`flow-typed`)

## husky and lint-staged

* `husky`
    * make `npm scripts` able to use [`any Git Hook`](https://github.com/typicode/husky/blob/master/HOOKS.md).
* `lint-staged`
    * extract all staged files (`git add`), and pass the files as arguments to `command` that is set with `glob`.

**okonet/lint-staged:** [Reformatting the code](https://github.com/okonet/lint-staged#reformatting-the-code)
> Tools like ESLint/TSLint or stylefmt can reformat your code according to an appropriate config by running eslint --fix/tslint --fix. After the code is reformatted, we want it to be added to the same commit.
>
> ~~Starting from v3.1, lint-staged will stash you remaining changes (not added to the index) and restore them from stash afterwards. This allows you to create partial commits with hunks using git add --patch.~~
> **This is still not resolved.**
>
> [Add better support for partially staged files #62](https://github.com/okonet/lint-staged/issues/62)

can't use `lint-staged` with `husky` still ???

then trying to use, all files staged is not pass to `prettier` in my case.

using `prettier` with `lint-staged` and `husky` may be still unstable,

take temporary plan B:
```json
"format": "prettier --write **/*.js package.json",
"precommit": "yarn format"
```

mistaken issue: [typicode/husky #182](https://github.com/typicode/husky/issues/182)

## meta information
* code **how**
* test **what**
* ~~commit **why**~~
* comment **why not**

[source](https://twitter.com/t_wada/status/904916106153828352)

[コミットログにはWhyを書けとよく言われるが、実はそれほど簡単ではない件について](http://qiita.com/DQNEO/items/00da79896d65d6e161f9)
> 例えば、コミットログに
>
> 「登録画面のtitle要素を変更」
>
> などと書かれていたとすると、「いやいや、そんなのはgit log -pすればわかるでしょ。何で変更するのかその理由を書いてよ」と言いたくなります。

what's means that **commit must be "why"** ??

[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
![](https://i.gyazo.com/9ad588370cb205543086ab50e6cbe04b.png)

it may be incorrect to make them parallel.

above capture seem that **why** mean **why commit** not **why code**.

[gitにおけるコミットログ/メッセージ例文集100](https://gist.github.com/mono0926/e6ffd032c384ee4c1cef5a2aa4f778d7)
> * Add	1149
>
> * Fix	1014
>
> * Update	584
>
> * Remove	566
>
> * Use	382
>
> * Move 178

## flow
[**Flow offers different methods to infer types for third-party source code. **](https://github.com/ryyppy/flow-guide/tree/master/styleguide#libdef-files)
> #### Using and Vendoring js.flow Files ("Shadow Files")
> vendor flow-type declarations is by copying the original source of each vendored file and put it in an accompanying file with a .js.flow suffix.
>
> For our projects, we always vendor complementary flow.js files. Unfortunately, we don't have a solution for minified source code yet (except for writing libdef declarations by hand).
>
> Also, this method will eventually cause problems with future major (breaking) flow updates. Until the community made up their mind about how to handle these dependencies, we will hopefully be able to update flow-bin dependencies in consuming codebases as soon as we do in our libraries.
>
> #### External Libdef Files
> Since we try to achieve a 100% flow coverage, there needs to be a balance between value gain of using another node-module and type-safetiness.
>
> For maintaining and retrieving libdef files of more popular projects we use [flow-typed](https://github.com/flowtype/flow-typed). By default, the flow-typed cli binary will install downloaded libdef files in [PROJECT]/flow-typed/npm, which are tagged by flow & module version. These files always have to be tracked in git.
>
> Whenever you use flow-typed, make sure to add the path flow-typed/ in the [LIB] section of your project's .flowconfig. Otherwise, flow might not pick up the libdef files.
>
> If you have to write a libdef on your own, make sure to put these definitions directly in the flow-typed, but not in the flow-typed/npm subdirectory.

and **If a third-party library that has no type information is used by your project, Flow will treat it like any other untyped dependency and mark all of its exports as `any`.** [(Library Definitions)](https://flow.org/en/docs/libdefs/)

can use [AgentME/flow-copy-source](https://github.com/AgentME/flow-copy-source) to copy them into a destination directory with the .flow suffix appended to the filename.

### `module.ignore_non_literal_requires` is needed???
[module.ignore_non_literal_requires (boolean)](https://flow.org/en/docs/config/options/#toc-module-ignore-non-literal-requires-boolean)
> Set this to `true` and Flow will no longer complain when you use `require()` with something other than a string literal.
> The default value is `false`.

[「後付の型システム」の活用についてFlowtypeとReduxから考える](http://qiita.com/mizchi/items/8cf4e0c868f5c49ebcbf)
> オプションで module.ignore_non_literal_requires=true とすると、require/importしたものがanyとなり

but it seems that external library to be `import/required`ed is treated as `any` by default.
It seems to me that the condition is not `module.ignore_non_literal_requires=true`, but `.flowconfig` doesn't includes `.*/node_modules/.*` in `ignore` property.

<!-- ### interpret
`type` means `super`. (it may be literal values as `type` too.)

all `instance`s exists in code must be any `sub` and can be applied `type`. -->

### use words
* [`type` | `:`]()
* [`property?` | `?value`]()
* [`interface` | `implements`]()
* [`opaque`]()

<!-- [libdef](https://flow.org/en/docs/libdefs/#whats-a-library-definition-a-classtoc-idtoc-what-s-a-library-definition-hreftoc-what-s-a-library-definitiona)
> If a third-party library that has no type information is used by your project, Flow will treat it like any other untyped dependency and mark all of its exports as any. Interestingly, this is the only place that Flow will implicitly inject any into your program.
>
> Because of this behavior, it is a best practice to find or write libdefs for as many of the third-party libraries that you use as you can. We recommend checking out the flow-typed tool and repository , which helps you quickly find and install pre-existing libdefs for your third-party dependencies.

**flow is the mirror world.** -->


## eslint
**never use [`eslint`](https://eslint.org/).**

* [How does it compare to ESLint (or TSLint, stylelint...)?](https://github.com/prettier/prettier#how-does-it-compare-to-eslint-or-tslint-stylelint)

    > Linters have two categories of rules:
    >
    > **Formatting rules**: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style...
    >
    > Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from scratch in a consistent way, so it's not possible for the programmer to make a mistake there anymore :)
    >
    > **Code-quality rules**: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors...
    >
    > Prettier does nothing to help with those kind of rules. They are also the most important ones provided by linters as they are likely to catch real bugs with your code!

* [Why linting makes me yawn](https://medium.com/@Jakeherringbone/why-linting-makes-me-yawn-cadbd9a51ca9)

    > the linter doesn’t run in every place the compiler runs. **The only satisfactory solution "we found"** is, always run this kind of “100% incorrect” lint check along with the compiler. That means red underlines in the editor, command-line build fails, continuous integration fails, and the engineer who insists on using a totally different dev environment sees it too.
    >
    > This is where I question having a separate linter tool. When should I run the linter? Should it force me to move curly braces around while I’m hacking away? Should I be stopped before running the build and test suite because of some stray whitespace? Will everyone on my team run it, or will Bob say “oh, yeah, that curly brace is on the end of line 34 because I didn’t run the linter on my change.” (Then I fix it and line 34 is forever blamed to the wrong person.) Because of the useless formatting checks, we want to defer getting a stack of warnings until we “clean up the code someday.” But for the 100% incorrectness checks, we want them right there next to the type checker, and enforced for everyone.
    >
    > My conclusion for 100% incorrectness issues: **add them to the compiler.**
