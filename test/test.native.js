/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PI = require( '@stdlib/constants-float64-pi' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var truncsd = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( truncsd instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof truncsd, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = truncsd( NaN, 2, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `n < 1`', opts, function test( t ) {
	var v;

	v = truncsd( PI, 0, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = truncsd( PI, -1, 10 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `b <= 0`', opts, function test( t ) {
	var v;

	v = truncsd( PI, 2, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = truncsd( PI, 2, -1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = truncsd( PINF, 5, 10 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v = truncsd( NINF, 3, 10 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v;

	v = truncsd( -0.0, 1, 10 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = truncsd( -0.0, 2, 10 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = truncsd( 0.0, 1, 10 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = truncsd( +0.0, 2, 10 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures (base 10)', opts, function test( t ) {
	t.strictEqual( truncsd( PI, 1, 10 ), 3.0, 'returns expected value' );
	t.strictEqual( truncsd( -PI, 1, 10 ), -3.0, 'returns expected value' );
	t.strictEqual( truncsd( PI, 2, 10 ), 3.1, 'returns expected value' );
	t.strictEqual( truncsd( -PI, 2, 10 ), -3.1, 'returns expected value' );
	t.strictEqual( truncsd( PI, 3, 10 ), 3.14, 'returns expected value' );
	t.strictEqual( truncsd( -PI, 3, 10 ), -3.14, 'returns expected value' );
	t.strictEqual( truncsd( PI, 5, 10 ), 3.1415, 'returns expected value' );
	t.strictEqual( truncsd( -PI, 5, 10 ), -3.1415, 'returns expected value' );
	t.strictEqual( truncsd( 0.0, 2, 10 ), 0.0, 'returns expected value' );
	t.strictEqual( truncsd( 12368.0, 3, 10 ), 12300.0, 'returns expected value' );
	t.strictEqual( truncsd( -12368.0, 3, 10 ), -12300.0, 'returns expected value' );
	t.strictEqual( truncsd( 12368.0, 2, 10 ), 12000.0, 'returns expected value' );
	t.strictEqual( truncsd( -12368.0, 2, 10 ), -12000.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures (base 2)', opts, function test( t ) {
	t.strictEqual( truncsd( 0.0313, 1, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 2, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 3, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 4, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 5, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 6, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 7, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 8, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 9, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 10, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 11, 2 ), 0.031280517578125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 12, 2 ), 0.0312957763671875, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 13, 2 ), 0.0312957763671875, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 14, 2 ), 0.031299591064453125, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures using an arbitrary base', opts, function test( t ) {
	t.strictEqual( truncsd( 0.0313, 1, 16 ), 0.03125, 'returns expected value' );
	t.strictEqual( truncsd( 0.0313, 5, 16 ), 0.03129994869232178, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input value', opts, function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = truncsd( x, 1000, 10 );
	t.strictEqual( v, x, 'returns expected value' );

	x = -3.1468234343023397;
	v = truncsd( x, 1000, 10 );
	t.strictEqual( v, x, 'returns expected value' );

	x = 9007199254740000;
	v = truncsd( x, 320, 10 );
	t.strictEqual( v, x, 'returns expected value' );

	x = -9007199254740000;
	v = truncsd( x, 320, 10 );
	t.strictEqual( v, x, 'returns expected value' );

	t.end();
});
