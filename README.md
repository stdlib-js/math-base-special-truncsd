<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# truncsd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest number toward zero with `n` significant figures.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-truncsd
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var truncsd = require( '@stdlib/math-base-special-truncsd' );
```

#### truncsd( x, n, b )

Rounds a `numeric` value to the nearest `number` toward zero with `n` significant figures.

```javascript
var v = truncsd( 3.141592653589793, 5, 10 );
// returns 3.1415

v = truncsd( 3.141592653589793, 1, 10 );
// returns 3.0

v = truncsd( 12368.0, 2, 10 );
// returns 12000.0

v = truncsd( 0.0313, 2, 2 );
// returns 0.03125
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var truncsd = require( '@stdlib/math-base-special-truncsd' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5000.0, 5000.0, opts );

logEachMap( 'x: %0.4f. a: %d. b: %d. Rounded: %0.4f.', x, 5, 10, truncsd );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/truncsd.h"
```

#### stdlib_base_truncsd( x, n, b )

Rounds a `numeric` value to the nearest `number` toward negative infinity with `n` significant figures.

```c
double out = stdlib_base_truncsd( 3.141592653589793, 5, 10 );
// returns 3.1415
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` number of significant figures.
-   **b**: `[in] int32_t` base.

```c
double stdlib_base_truncsd( const double x, const int32_t n, const int32_t b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/truncsd.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
    const int32_t n[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_truncsd( x[ i ], n[ i ], b[ i ] );
        printf( "truncsd(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceilsd`][@stdlib/math/base/special/ceilsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward positive infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floorsd`][@stdlib/math/base/special/floorsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward negative infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math-base/special/roundsd`][@stdlib/math/base/special/roundsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math-base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-truncsd.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-truncsd

[test-image]: https://github.com/stdlib-js/math-base-special-truncsd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-truncsd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-truncsd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-truncsd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-truncsd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-truncsd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-truncsd/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-truncsd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-truncsd/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-truncsd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-truncsd/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-truncsd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-truncsd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-truncsd/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceilsd]: https://github.com/stdlib-js/math-base-special-ceilsd

[@stdlib/math/base/special/floorsd]: https://github.com/stdlib-js/math-base-special-floorsd

[@stdlib/math/base/special/roundsd]: https://github.com/stdlib-js/math-base-special-roundsd

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math-base-special-trunc

<!-- </related-links> -->

</section>

<!-- /.links -->
