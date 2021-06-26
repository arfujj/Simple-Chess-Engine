// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"chess.js":[function(require,module,exports) {
var define;
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Copyright (c) 2020, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/
var Chess = function Chess(fen) {
  var BLACK = 'b';
  var WHITE = 'w';
  var EMPTY = -1;
  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';
  var SYMBOLS = 'pnbrqkPNBRQK';
  var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];
  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };
  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14, 18, 33, 31, 14],
    b: [-17, -15, 17, 15],
    r: [-16, 1, 16, -1],
    q: [-17, -16, -15, 1, 17, 16, 15, -1],
    k: [-17, -16, -15, 1, 17, 16, 15, -1]
  }; // prettier-ignore

  var ATTACKS = [20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20]; // prettier-ignore

  var RAYS = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17];
  var SHIFTS = {
    p: 0,
    n: 1,
    b: 2,
    r: 3,
    q: 4,
    k: 5
  };
  var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q'
  };
  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };
  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_3 = 5;
  var RANK_4 = 4;
  var RANK_5 = 3;
  var RANK_6 = 2;
  var RANK_7 = 1;
  var RANK_8 = 0; // prettier-ignore

  var SQUARES = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 16,
    b7: 17,
    c7: 18,
    d7: 19,
    e7: 20,
    f7: 21,
    g7: 22,
    h7: 23,
    a6: 32,
    b6: 33,
    c6: 34,
    d6: 35,
    e6: 36,
    f6: 37,
    g6: 38,
    h6: 39,
    a5: 48,
    b5: 49,
    c5: 50,
    d5: 51,
    e5: 52,
    f5: 53,
    g5: 54,
    h5: 55,
    a4: 64,
    b4: 65,
    c4: 66,
    d4: 67,
    e4: 68,
    f4: 69,
    g4: 70,
    h4: 71,
    a3: 80,
    b3: 81,
    c3: 82,
    d3: 83,
    e3: 84,
    f3: 85,
    g3: 86,
    h3: 87,
    a2: 96,
    b2: 97,
    c2: 98,
    d2: 99,
    e2: 100,
    f2: 101,
    g2: 102,
    h2: 103,
    a1: 112,
    b1: 113,
    c1: 114,
    d1: 115,
    e1: 116,
    f1: 117,
    g1: 118,
    h1: 119
  };
  var ROOKS = {
    w: [{
      square: SQUARES.a1,
      flag: BITS.QSIDE_CASTLE
    }, {
      square: SQUARES.h1,
      flag: BITS.KSIDE_CASTLE
    }],
    b: [{
      square: SQUARES.a8,
      flag: BITS.QSIDE_CASTLE
    }, {
      square: SQUARES.h8,
      flag: BITS.KSIDE_CASTLE
    }]
  };

  var _board = new Array(128);

  var kings = {
    w: EMPTY,
    b: EMPTY
  };
  var _turn = WHITE;
  var castling = {
    w: 0,
    b: 0
  };
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var _history = [];
  var header = {};
  var comments = {};
  /* if the user passes in a fen string, load it, else default to
   * starting position
   */

  if (typeof fen === 'undefined') {
    _load(DEFAULT_POSITION);
  } else {
    _load(fen);
  }

  function _clear(keep_headers) {
    if (typeof keep_headers === 'undefined') {
      keep_headers = false;
    }

    _board = new Array(128);
    kings = {
      w: EMPTY,
      b: EMPTY
    };
    _turn = WHITE;
    castling = {
      w: 0,
      b: 0
    };
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    _history = [];
    if (!keep_headers) header = {};
    comments = {};
    update_setup(generate_fen());
  }

  function prune_comments() {
    var reversed_history = [];
    var current_comments = {};

    var copy_comment = function copy_comment(fen) {
      if (fen in comments) {
        current_comments[fen] = comments[fen];
      }
    };

    while (_history.length > 0) {
      reversed_history.push(undo_move());
    }

    copy_comment(generate_fen());

    while (reversed_history.length > 0) {
      make_move(reversed_history.pop());
      copy_comment(generate_fen());
    }

    comments = current_comments;
  }

  function _reset() {
    _load(DEFAULT_POSITION);
  }

  function _load(fen, keep_headers) {
    if (typeof keep_headers === 'undefined') {
      keep_headers = false;
    }

    var tokens = fen.split(/\s+/);
    var position = tokens[0];
    var square = 0;

    if (!_validate_fen(fen).valid) {
      return false;
    }

    _clear(keep_headers);

    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = piece < 'a' ? WHITE : BLACK;

        _put({
          type: piece.toLowerCase(),
          color: color
        }, algebraic(square));

        square++;
      }
    }

    _turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }

    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }

    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }

    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }

    ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);
    update_setup(generate_fen());
    return true;
  }
  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */


  function _validate_fen(fen) {
    var errors = {
      0: 'No errors.',
      1: 'FEN string must contain six space-delimited fields.',
      2: '6th field (move number) must be a positive integer.',
      3: '5th field (half move counter) must be a non-negative integer.',
      4: '4th field (en-passant square) is invalid.',
      5: '3rd field (castling availability) is invalid.',
      6: '2nd field (side to move) is invalid.',
      7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
      8: '1st field (piece positions) is invalid [consecutive numbers].',
      9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square'
    };
    /* 1st criterion: 6 space-seperated fields? */

    var tokens = fen.split(/\s+/);

    if (tokens.length !== 6) {
      return {
        valid: false,
        error_number: 1,
        error: errors[1]
      };
    }
    /* 2nd criterion: move number field is a integer value > 0? */


    if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
      return {
        valid: false,
        error_number: 2,
        error: errors[2]
      };
    }
    /* 3rd criterion: half move counter is an integer >= 0? */


    if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
      return {
        valid: false,
        error_number: 3,
        error: errors[3]
      };
    }
    /* 4th criterion: 4th field is a valid e.p.-string? */


    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return {
        valid: false,
        error_number: 4,
        error: errors[4]
      };
    }
    /* 5th criterion: 3th field is a valid castle-string? */


    if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return {
        valid: false,
        error_number: 5,
        error: errors[5]
      };
    }
    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */


    if (!/^(w|b)$/.test(tokens[1])) {
      return {
        valid: false,
        error_number: 6,
        error: errors[6]
      };
    }
    /* 7th criterion: 1st field contains 8 rows? */


    var rows = tokens[0].split('/');

    if (rows.length !== 8) {
      return {
        valid: false,
        error_number: 7,
        error: errors[7]
      };
    }
    /* 8th criterion: every row is valid? */


    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return {
              valid: false,
              error_number: 8,
              error: errors[8]
            };
          }

          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {
              valid: false,
              error_number: 9,
              error: errors[9]
            };
          }

          sum_fields += 1;
          previous_was_number = false;
        }
      }

      if (sum_fields !== 8) {
        return {
          valid: false,
          error_number: 10,
          error: errors[10]
        };
      }
    }

    if (tokens[3][1] == '3' && tokens[1] == 'w' || tokens[3][1] == '6' && tokens[1] == 'b') {
      return {
        valid: false,
        error_number: 11,
        error: errors[11]
      };
    }
    /* everything's okay! */


    return {
      valid: true,
      error_number: 0,
      error: errors[0]
    };
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (_board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }

        var color = _board[i].color;
        var piece = _board[i].type;
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      }

      if (i + 1 & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';

    if (castling[WHITE] & BITS.KSIDE_CASTLE) {
      cflags += 'K';
    }

    if (castling[WHITE] & BITS.QSIDE_CASTLE) {
      cflags += 'Q';
    }

    if (castling[BLACK] & BITS.KSIDE_CASTLE) {
      cflags += 'k';
    }

    if (castling[BLACK] & BITS.QSIDE_CASTLE) {
      cflags += 'q';
    }
    /* do we have an empty castling flag? */


    cflags = cflags || '-';
    var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square);
    return [fen, _turn, cflags, epflags, half_moves, move_number].join(' ');
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }

    return header;
  }
  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */


  function update_setup(fen) {
    if (_history.length > 0) return;

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function _get(square) {
    var piece = _board[SQUARES[square]];
    return piece ? {
      type: piece.type,
      color: piece.color
    } : null;
  }

  function _put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false;
    }
    /* check for piece */


    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }
    /* check for valid square */


    if (!(square in SQUARES)) {
      return false;
    }

    var sq = SQUARES[square];
    /* don't let the user place more than one king */

    if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }

    _board[sq] = {
      type: piece.type,
      color: piece.color
    };

    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());
    return true;
  }

  function _remove(square) {
    var piece = _get(square);

    _board[SQUARES[square]] = null;

    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());
    return piece;
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: _turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
      move.captured = PAWN;
    }

    return move;
  }

  function generate_moves(options) {
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (typeof board[from] !== "undefined" && board[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
        var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];

        for (var i = 0, len = pieces.length; i < len; i++) {
          moves.push(build_move(board, from, to, flags, pieces[i]));
        }
      } else {
        moves.push(build_move(board, from, to, flags));
      }
    }

    var moves = [];
    var us = _turn;
    var them = swap_color(us);
    var second_rank = {
      b: RANK_7,
      w: RANK_2
    };
    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;
    /* do we want legal moves? */

    var legal = typeof options !== 'undefined' && 'legal' in options ? options.legal : true;
    /* are we generating moves for a single square? */

    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        first_sq = last_sq = SQUARES[options.square];
        single_square = true;
      } else {
        /* invalid square */
        return [];
      }
    }

    for (var i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) {
        i += 7;
        continue;
      }

      var piece = _board[i];

      if (piece == null || piece.color !== us) {
        continue;
      }

      if (piece.type === PAWN) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];

        if (_board[square] == null) {
          add_move(_board, moves, i, square, BITS.NORMAL);
          /* double square */

          var square = i + PAWN_OFFSETS[us][1];

          if (second_rank[us] === rank(i) && _board[square] == null) {
            add_move(_board, moves, i, square, BITS.BIG_PAWN);
          }
        }
        /* pawn captures */


        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue;

          if (_board[square] != null && _board[square].color === them) {
            add_move(_board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
            add_move(_board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;

          while (true) {
            square += offset;
            if (square & 0x88) break;

            if (_board[square] == null) {
              add_move(_board, moves, i, square, BITS.NORMAL);
            } else {
              if (_board[square].color === us) break;
              add_move(_board, moves, i, square, BITS.CAPTURE);
              break;
            }
            /* break, if knight or king */


            if (piece.type === 'n' || piece.type === 'k') break;
          }
        }
      }
    }
    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */


    if (!single_square || last_sq === kings[us]) {
      /* king-side castling */
      if (castling[us] & BITS.KSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from + 2;

        if (_board[castling_from + 1] == null && _board[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) {
          add_move(_board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
        }
      }
      /* queen-side castling */


      if (castling[us] & BITS.QSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from - 2;

        if (castling_from != -1 && _board[castling_from - 1] == null && _board[castling_from - 2] == null && _board[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) {
          add_move(_board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
        }
      }
    }
    /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */


    if (!legal) {
      return moves;
    }
    /* filter out illegal moves */


    var legal_moves = [];

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);

      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }

      undo_move();
    }

    return legal_moves;
  }
  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} sloppy Use the sloppy SAN generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */


  function move_to_san(move, sloppy) {
    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      var disambiguator = get_disambiguator(move, sloppy);

      if (move.piece !== PAWN) {
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }

        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);

    if (_in_check()) {
      if (_in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }

    undo_move();
    return output;
  } // parses all of the decorators out of a SAN string


  function stripped_san(move) {
    return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
  }

  function attacked(color, square) {
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) {
        i += 7;
        continue;
      }
      /* if empty square or wrong color */


      if (_board[i] == null || _board[i].color !== color) continue;
      var piece = _board[i];
      var difference = i - square;
      var index = difference + 119;

      if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true;
          } else {
            if (piece.color === BLACK) return true;
          }

          continue;
        }
        /* if the piece is a knight or a king */


        if (piece.type === 'n' || piece.type === 'k') return true;
        var offset = RAYS[index];
        var j = i + offset;
        var blocked = false;

        while (j !== square) {
          if (_board[j] != null) {
            blocked = true;
            break;
          }

          j += offset;
        }

        if (!blocked) return true;
      }
    }

    return false;
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }

  function _in_check() {
    return king_attacked(_turn);
  }

  function _in_checkmate() {
    return _in_check() && generate_moves().length === 0;
  }

  function _in_stalemate() {
    return !_in_check() && generate_moves().length === 0;
  }

  function _insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;

      if (i & 0x88) {
        i += 7;
        continue;
      }

      var piece = _board[i];

      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;

        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }

        num_pieces++;
      }
    }
    /* k vs. k */


    if (num_pieces === 2) {
      return true;
    } else if (
    /* k vs. kn .... or .... k vs. kb */
    num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
      return true;
    } else if (num_pieces === pieces[BISHOP] + 2) {
      /* kb vs. kb where any number of bishops are all on the same color */
      var sum = 0;
      var len = bishops.length;

      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }

      if (sum === 0 || sum === len) {
        return true;
      }
    }

    return false;
  }

  function _in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break;
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0, 4).join(' ');
      /* has the position occurred three or move times */

      positions[fen] = fen in positions ? positions[fen] + 1 : 1;

      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break;
      }

      make_move(moves.pop());
    }

    return repetition;
  }

  function push(move) {
    _history.push({
      move: move,
      kings: {
        b: kings.b,
        w: kings.w
      },
      turn: _turn,
      castling: {
        b: castling.b,
        w: castling.w
      },
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number
    });
  }

  function make_move(move) {
    var us = _turn;
    var them = swap_color(us);
    push(move);
    _board[move.to] = _board[move.from];
    _board[move.from] = null;
    /* if ep capture, remove the captured pawn */

    if (move.flags & BITS.EP_CAPTURE) {
      if (_turn === BLACK) {
        _board[move.to - 16] = null;
      } else {
        _board[move.to + 16] = null;
      }
    }
    /* if pawn promotion, replace with new piece */


    if (move.flags & BITS.PROMOTION) {
      _board[move.to] = {
        type: move.promotion,
        color: us
      };
    }
    /* if we moved the king */


    if (_board[move.to].type === KING) {
      kings[_board[move.to].color] = move.to;
      /* if we castled, move the rook next to the king */

      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        _board[castling_to] = _board[castling_from];
        _board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        _board[castling_to] = _board[castling_from];
        _board[castling_from] = null;
      }
      /* turn off castling */


      castling[us] = '';
    }
    /* turn off castling if we move a rook */


    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    /* turn off castling if we capture a rook */


    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    /* if big pawn move, update the en passant square */


    if (move.flags & BITS.BIG_PAWN) {
      if (_turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }
    /* reset the 50 move counter if a pawn is moved or a piece is captured */


    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (_turn === BLACK) {
      move_number++;
    }

    _turn = swap_color(_turn);
  }

  function undo_move() {
    var old = _history.pop();

    if (old == null) {
      return null;
    }

    var move = old.move;
    kings = old.kings;
    _turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;
    var us = _turn;
    var them = swap_color(_turn);
    _board[move.from] = _board[move.to];
    _board[move.from].type = move.piece; // to undo any promotions

    _board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      _board[move.to] = {
        type: move.captured,
        color: them
      };
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;

      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }

      _board[index] = {
        type: PAWN,
        color: them
      };
    }

    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;

      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      _board[castling_to] = _board[castling_from];
      _board[castling_from] = null;
    }

    return move;
  }
  /* this function is used to uniquely identify ambiguous moves */


  function get_disambiguator(move, sloppy) {
    var moves = generate_moves({
      legal: !sloppy
    });
    var from = move.from;
    var to = move.to;
    var piece = move.piece;
    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;
      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */

      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from);
      } else if (same_file > 0) {
        /* if the moving piece rests on the same file, use the rank symbol as the
         * disambiguator
         */
        return algebraic(from).charAt(1);
      } else {
        /* else use the file symbol */
        return algebraic(from).charAt(0);
      }
    }

    return '';
  }

  function _ascii() {
    var s = '   +------------------------+\n';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }
      /* empty piece */


      if (_board[i] == null) {
        s += ' . ';
      } else {
        var piece = _board[i].type;
        var color = _board[i].color;
        var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if (i + 1 & 0x88) {
        s += '|\n';
        i += 8;
      }
    }

    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';
    return s;
  } // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates


  function move_from_san(move, sloppy) {
    // strip off any move decorations: e.g Nf3+?!
    var clean_move = stripped_san(move); // if we're using the sloppy parser run a regex to grab piece, to, and from
    // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7

    if (sloppy) {
      var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);

      if (matches) {
        var piece = matches[1];
        var from = matches[2];
        var to = matches[3];
        var promotion = matches[4];
      }
    }

    var moves = generate_moves();

    for (var i = 0, len = moves.length; i < len; i++) {
      // try the strict parser first, then the sloppy parser if requested
      // by the user
      if (clean_move === stripped_san(move_to_san(moves[i])) || sloppy && clean_move === stripped_san(move_to_san(moves[i], true))) {
        return moves[i];
      } else {
        if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }

    return null;
  }
  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/


  function rank(i) {
    return i >> 4;
  }

  function file(i) {
    return i & 15;
  }

  function algebraic(i) {
    var f = file(i),
        r = rank(i);
    return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE;
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1;
  }
  /* pretty = external move object */


  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move, false);
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);
    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }

    move.flags = flags;
    return move;
  }

  function clone(obj) {
    var dupe = obj instanceof Array ? [] : {};

    for (var property in obj) {
      if (_typeof(property) === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/


  function _perft(depth) {
    var moves = generate_moves({
      legal: false
    });
    var nodes = 0;
    var color = _turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);

      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = _perft(depth - 1);

          nodes += child_nodes;
        } else {
          nodes++;
        }
      }

      undo_move();
    }

    return nodes;
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: function () {
      /* from the ECMA-262 spec (section 12.6.4):
       * "The mechanics of enumerating the properties ... is
       * implementation dependent"
       * so: for (var sq in SQUARES) { keys.push(sq); } might not be
       * ordered correctly
       */
      var keys = [];

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (i & 0x88) {
          i += 7;
          continue;
        }

        keys.push(algebraic(i));
      }

      return keys;
    }(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function load(fen) {
      return _load(fen);
    },
    reset: function reset() {
      return _reset();
    },
    moves: function moves(options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */
      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {
        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (typeof options !== 'undefined' && 'verbose' in options && options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(move_to_san(ugly_moves[i], false));
        }
      }

      return moves;
    },
    in_check: function in_check() {
      return _in_check();
    },
    in_checkmate: function in_checkmate() {
      return _in_checkmate();
    },
    in_stalemate: function in_stalemate() {
      return _in_stalemate();
    },
    in_draw: function in_draw() {
      return half_moves >= 100 || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
    },
    insufficient_material: function insufficient_material() {
      return _insufficient_material();
    },
    in_threefold_repetition: function in_threefold_repetition() {
      return _in_threefold_repetition();
    },
    game_over: function game_over() {
      return half_moves >= 100 || _in_checkmate() || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
    },
    validate_fen: function validate_fen(fen) {
      return _validate_fen(fen);
    },
    fen: function fen() {
      return generate_fen();
    },
    board: function board() {
      var output = [],
          row = [];

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (_board[i] == null) {
          row.push(null);
        } else {
          row.push({
            type: _board[i].type,
            color: _board[i].color
          });
        }

        if (i + 1 & 0x88) {
          output.push(row);
          row = [];
          i += 8;
        }
      }

      return output;
    },
    pgn: function pgn(options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\n';
      var max_width = _typeof(options) === 'object' && typeof options.max_width === 'number' ? options.max_width : 0;
      var result = [];
      var header_exists = false;
      /* add the PGN header headerrmation */

      for (var i in header) {
        /* TODO: order of enumerated properties in header object is not
         * guaranteed, see ECMA-262 spec (section 12.6.4)
         */
        result.push('[' + i + ' "' + header[i] + '"]' + newline);
        header_exists = true;
      }

      if (header_exists && _history.length) {
        result.push(newline);
      }

      var append_comment = function append_comment(move_string) {
        var comment = comments[generate_fen()];

        if (typeof comment !== 'undefined') {
          var delimiter = move_string.length > 0 ? ' ' : '';
          move_string = "".concat(move_string).concat(delimiter, "{").concat(comment, "}");
        }

        return move_string;
      };
      /* pop all of history onto reversed_history */


      var reversed_history = [];

      while (_history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';
      /* special case of a commented starting position with no moves */

      if (reversed_history.length === 0) {
        moves.push(append_comment(''));
      }
      /* build the list of moves.  a move_string looks like: "3. e3 e6" */


      while (reversed_history.length > 0) {
        move_string = append_comment(move_string);
        var move = reversed_history.pop();
        /* if the position started with black to move, start PGN with 1. ... */

        if (!_history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }

          move_string = move_number + '.';
        }

        move_string = move_string + ' ' + move_to_san(move, false);
        make_move(move);
      }
      /* are there any other leftover moves? */


      if (move_string.length) {
        moves.push(append_comment(move_string));
      }
      /* is there a result? */


      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }
      /* history should be back to what it was before we started generating PGN,
       * so join together moves
       */


      if (max_width === 0) {
        return result.join('') + moves.join(' ');
      }

      var strip = function strip() {
        if (result.length > 0 && result[result.length - 1] === ' ') {
          result.pop();
          return true;
        }

        return false;
      };
      /* NB: this does not preserve comment whitespace. */


      var wrap_comment = function wrap_comment(width, move) {
        var _iterator = _createForOfIteratorHelper(move.split(' ')),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var token = _step.value;

            if (!token) {
              continue;
            }

            if (width + token.length > max_width) {
              while (strip()) {
                width--;
              }

              result.push(newline);
              width = 0;
            }

            result.push(token);
            width += token.length;
            result.push(' ');
            width++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (strip()) {
          width--;
        }

        return width;
      };
      /* wrap the PGN output at max_width */


      var current_width = 0;

      for (var i = 0; i < moves.length; i++) {
        if (current_width + moves[i].length > max_width) {
          if (moves[i].includes('{')) {
            current_width = wrap_comment(current_width, moves[i]);
            continue;
          }
        }
        /* if the current move will push past max_width */


        if (current_width + moves[i].length > max_width && i !== 0) {
          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }

        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('');
    },
    load_pgn: function load_pgn(pgn, options) {
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;

      function mask(str) {
        return str.replace(/\\/g, '\\');
      }

      function has_keys(object) {
        for (var key in object) {
          return true;
        }

        return false;
      }

      function parse_pgn_header(header, options) {
        var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, '$1');

          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj;
      }

      var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n'; // RegExp to split header. Takes advantage of the fact that header and movetext
      // will always have a blank line between them (ie, two newline_char's).
      // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/

      var header_regex = new RegExp('^(\\[((?:' + mask(newline_char) + ')|.)*\\])' + '(?:' + mask(newline_char) + '){2}'); // If no header given, begin with moves.

      var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : ''; // Put the board in the starting position

      _reset();
      /* parse PGN header */


      var headers = parse_pgn_header(header_string, options);

      for (var key in headers) {
        set_header([key, headers[key]]);
      }
      /* load the starting position indicated by [Setup '1'] and
       * [FEN position] */


      if (headers['SetUp'] === '1') {
        if (!('FEN' in headers && _load(headers['FEN'], true))) {
          // second argument to load: don't clear the headers
          return false;
        }
      }
      /* NB: the regexes below that delete move numbers, recursive
       * annotations, and numeric annotation glyphs may also match
       * text in comments. To prevent this, we transform comments
       * by hex-encoding them in place and decoding them again after
       * the other tokens have been deleted.
       *
       * While the spec states that PGN files should be ASCII encoded,
       * we use {en,de}codeURIComponent here to support arbitrary UTF8
       * as a convenience for modern users */


      var to_hex = function to_hex(string) {
        return Array.from(string).map(function (c) {
          /* encodeURI doesn't transform most ASCII characters,
           * so we handle these ourselves */
          return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g, '').toLowerCase();
        }).join('');
      };

      var from_hex = function from_hex(string) {
        return string.length == 0 ? '' : decodeURIComponent('%' + string.match(/.{1,2}/g).join('%'));
      };

      var encode_comment = function encode_comment(string) {
        string = string.replace(new RegExp(mask(newline_char), 'g'), ' ');
        return "{".concat(to_hex(string.slice(1, string.length - 1)), "}");
      };

      var decode_comment = function decode_comment(string) {
        if (string.startsWith('{') && string.endsWith('}')) {
          return from_hex(string.slice(1, string.length - 1));
        }
      };
      /* delete header to get the moves */


      var ms = pgn.replace(header_string, '').replace(
      /* encode comments so they don't get deleted below */
      new RegExp("({[^}]*})+?|;([^".concat(mask(newline_char), "]*)"), 'g'), function (match, bracket, semicolon) {
        return bracket !== undefined ? encode_comment(bracket) : ' ' + encode_comment("{".concat(semicolon.slice(1), "}"));
      }).replace(new RegExp(mask(newline_char), 'g'), ' ');
      /* delete recursive annotation variations */

      var rav_regex = /(\([^\(\)]+\))+?/g;

      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }
      /* delete move numbers */


      ms = ms.replace(/\d+\.(\.\.)?/g, '');
      /* delete ... indicating black to move */

      ms = ms.replace(/\.\.\./g, '');
      /* delete numeric annotation glyphs */

      ms = ms.replace(/\$\d+/g, '');
      /* trim and get array of moves */

      var moves = trim(ms).split(new RegExp(/\s+/));
      /* delete empty entries */

      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        var comment = decode_comment(moves[half_move]);

        if (comment !== undefined) {
          comments[generate_fen()] = comment;
          continue;
        }

        move = move_from_san(moves[half_move], sloppy);
        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */

        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      comment = decode_comment(moves[moves.length - 1]);

      if (comment !== undefined) {
        comments[generate_fen()] = comment;
        moves.pop();
      }
      /* examine last move */


      move = moves[moves.length - 1];

      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      } else {
        move = move_from_san(move, sloppy);

        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      return true;
    },
    header: function header() {
      return set_header(arguments);
    },
    ascii: function ascii() {
      return _ascii();
    },
    turn: function turn() {
      return _turn;
    },
    setTurn: function setTurn(t) {
      _turn = t;
    },
    move: function move(_move, options) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
      var move_obj = null;

      if (typeof _move === 'string') {
        move_obj = move_from_san(_move, sloppy);
      } else if (_typeof(_move) === 'object') {
        var moves = generate_moves();
        /* convert the pretty move object to an ugly move object */

        for (var i = 0, len = moves.length; i < len; i++) {
          if (_move.from === algebraic(moves[i].from) && _move.to === algebraic(moves[i].to) && (!('promotion' in moves[i]) || _move.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }
      /* failed to find move */


      if (!move_obj) {
        return null;
      }
      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */


      var pretty_move = make_pretty(move_obj);
      make_move(move_obj);
      return pretty_move;
    },
    undo: function undo() {
      var move = undo_move();
      return move ? make_pretty(move) : null;
    },
    clear: function clear() {
      return _clear();
    },
    put: function put(piece, square) {
      return _put(piece, square);
    },
    get: function get(square) {
      return _get(square);
    },
    remove: function remove(square) {
      return _remove(square);
    },
    perft: function perft(depth) {
      return _perft(depth);
    },
    square_color: function square_color(square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark';
      }

      return null;
    },
    history: function history(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = typeof options !== 'undefined' && 'verbose' in options && options.verbose;

      while (_history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();

        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move));
        }

        make_move(move);
      }

      return move_history;
    },
    get_comment: function get_comment() {
      return comments[generate_fen()];
    },
    set_comment: function set_comment(comment) {
      comments[generate_fen()] = comment.replace('{', '[').replace('}', ']');
    },
    delete_comment: function delete_comment() {
      var comment = comments[generate_fen()];
      delete comments[generate_fen()];
      return comment;
    },
    get_comments: function get_comments() {
      prune_comments();
      return Object.keys(comments).map(function (fen) {
        return {
          fen: fen,
          comment: comments[fen]
        };
      });
    },
    delete_comments: function delete_comments() {
      prune_comments();
      return Object.keys(comments).map(function (fen) {
        var comment = comments[fen];
        delete comments[fen];
        return {
          fen: fen,
          comment: comment
        };
      });
    }
  };
};
/* export Chess object if using node or any other CommonJS compatible
 * environment */


if (typeof exports !== 'undefined') exports.Chess = Chess;
/* export Chess object for any RequireJS compatible environment */

if (typeof define !== 'undefined') define(function () {
  return Chess;
});
},{}],"turochamp/turochamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEPTH = 3;
var MIN = -200000;
var MAX = 200000;

var Turochamp = /*#__PURE__*/function () {
  function Turochamp(game) {
    _classCallCheck(this, Turochamp);

    this.game = game;
  }

  _createClass(Turochamp, [{
    key: "getEvaluation",
    value: function getEvaluation() {
      var t = this.game.turn();
      this.game.setTurn("w");

      var val = this._getPositionalValue() + 100 * this._getMaterialValue();

      this.game.setTurn(t);
      return val;
    }
  }, {
    key: "findNextMove",
    value: function findNextMove() {
      if (this.game.turn() != "w") return null;
      var maxValue = -20000;
      var maxValueMove = null;
      var moves = this.game.moves({
        verbose: true
      });

      var _iterator = _createForOfIteratorHelper(moves),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var move = _step.value;
          var val = this._alphaBetaSearch(move, 1, MIN, MAX, false) * 100;
          this.game.move(move);
          val += this._getPositionEvaluation();
          val += this._countKingSafetyScore(move);
          val += this._isCheckMateThreat() ? 1 : 0;
          this.game.undo();

          if (maxValue <= val) {
            maxValue = val;
            maxValueMove = move;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return maxValueMove;
    }
  }, {
    key: "_alphaBetaSearch",
    value: function _alphaBetaSearch(move, currDepth, alpha, beta, isMax) {
      if (currDepth > DEPTH) {
        this.game.move(move);

        var mval = this._getMaterialValueSub();

        this.game.undo();
        return mval;
      }

      var considerableMoves = 0;
      this.game.move(move);

      if (isMax) {
        // Max
        var best = MIN;

        var _iterator2 = _createForOfIteratorHelper(this.game.moves({
          verbose: true
        })),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var m = _step2.value;

            if (m.flags === "c" || m.flags === "e") {
              considerableMoves++;

              var val = this._alphaBetaSearch(m, currDepth + 1, alpha, beta, false);

              best = Math.max(best, val);
              alpha = Math.max(alpha, best);
              if (beta <= alpha) break;
            } else {
              var _val = this._getMaterialValueSub();

              best = Math.max(best, _val);
              beta = Math.max(beta, best);
              if (beta <= alpha) break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (considerableMoves == 0) {
          // No considerable moves, thus dead position
          var matval = this._getMaterialValueSub();

          this.game.undo();
          return matval;
        }

        this.game.undo();
        return best;
      } else {
        // Min
        var _best = MAX;

        var _iterator3 = _createForOfIteratorHelper(this.game.moves({
          verbose: true
        })),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _m = _step3.value;

            if (_m.flags === "c" || _m.flags === "e") {
              considerableMoves++;

              var _val2 = this._alphaBetaSearch(_m, currDepth + 1, alpha, beta, true);

              _best = Math.min(_best, _val2);
              beta = Math.min(beta, _best);
              if (beta <= alpha) break;
            } else {
              var _val3 = this._getMaterialValueSub();

              _best = Math.min(_best, _val3);
              beta = Math.min(beta, _best);
              if (beta <= alpha) break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (considerableMoves == 0) {
          // No considerable moves, thus dead position
          var _matval = this._getMaterialValueSub();

          this.game.undo();
          return _matval;
        }

        this.game.undo();
        return _best;
      }
    }
  }, {
    key: "_getPositionEvaluation",
    value: function _getPositionEvaluation() {
      var t = this.game.turn();
      this.game.setTurn("w");

      var val = this._getPositionalValue();

      this.game.setTurn(t);
      return val;
    }
  }, {
    key: "_getPositionalValue",
    value: function _getPositionalValue() {
      var value = 0; // (i)

      var criteria1 = this._countRootNumberOfMoves("q") + this._countRootNumberOfMoves("b") + this._countRootNumberOfMoves("r") + this._countRootNumberOfMoves("n");

      value += criteria1; // (ii)

      var criteria2 = this._countDefendersOfPiece("n") + this._countDefendersOfPiece("b") + this._countDefendersOfPiece("r");

      value += criteria2; // (iii)

      var criteria3 = this._countKingMovesNotCastle();

      value += criteria3; // (iv)

      var criteria4 = this._countKingExposedScore();

      value -= criteria4; // (vi) ,(vii)

      var criteria6 = this._countPawnScore();

      value += criteria6; //(ix)

      value += this._isBlackInCheck() ? 0.5 : 0;
      return value;
    }
  }, {
    key: "_countRootNumberOfMoves",
    value: function _countRootNumberOfMoves(piece) {
      var value = 0;
      var moves = this.game.moves({
        verbose: true
      });

      var _iterator4 = _createForOfIteratorHelper(moves),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var move = _step4.value;

          if (move.color == "w" && move.piece.toLowerCase() == piece) {
            if (move.flags == "c") value += 2;else value += 1;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      value = Math.sqrt(value);
      return value;
    }
  }, {
    key: "_countPawnScore",
    value: function _countPawnScore() {
      var value = 0;
      var rank = 8;

      var _iterator5 = _createForOfIteratorHelper(this.game.board()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var row = _step5.value;
          var file = "a";

          var _iterator6 = _createForOfIteratorHelper(row),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var sq = _step6.value;

              if (sq == null) {
                file = this._nextChar(file);
                continue;
              }

              if (sq.type === "p" && sq.color === "w") {
                value += (rank - 2) * 0.2;

                var d = this._countSquareDefenders(file + rank, false);

                if (rank > 2 && d >= 1) value += 0.3;
              }

              file = this._nextChar(file);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          rank--;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return value;
    }
  }, {
    key: "_countKingMovesNotCastle",
    value: function _countKingMovesNotCastle() {
      var value = 0;

      var _iterator7 = _createForOfIteratorHelper(this.game.moves({
        verbose: true
      })),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var move = _step7.value;

          if (move.piece.toLowerCase() === "k" && move.flags != "q" && move.flags != "k") {
            value += 1;
            if (move.flags == "c") value += 1;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return Math.sqrt(value);
    }
  }, {
    key: "_countKingExposedScore",
    value: function _countKingExposedScore() {
      var value = 0;

      var sq = this._squaresOfPiece("k")[0];

      var removedKing = this.game.remove(sq);
      this.game.put({
        type: "q",
        color: "w"
      }, sq);

      try {
        var _iterator8 = _createForOfIteratorHelper(this.game.moves({
          verbose: true,
          legal: false,
          square: sq
        })),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var move = _step8.value;

            if (move.piece === "q") {
              value += 1;
              if (move.flags === "c") value += 1;
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        this.game.put(removedKing, sq);
      } catch (err) {
        console.log(err);
      }

      return Math.sqrt(value);
    }
  }, {
    key: "_countKingSafetyScore",
    value: function _countKingSafetyScore(movePlayed) {
      var value = 0;
      if (this._isCastlingPossible()) value += 1;

      var _iterator9 = _createForOfIteratorHelper(this.game.moves({
        verbose: true
      })),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var move = _step9.value;

          if (move.flags === "k" || move.flags === "q") {
            value += 1;
            break;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      if (movePlayed.flags === "k" || movePlayed.flags === "q") value += 1; // TODO : Can't do it here have to do it at root

      return value;
    }
  }, {
    key: "_isCheckMateThreat",
    value: function _isCheckMateThreat() {
      var _iterator10 = _createForOfIteratorHelper(this.game.moves({
        verbose: true
      })),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var move = _step10.value;
          this.game.move(move);

          if (this.game.in_checkmate()) {
            return true;
          }

          this.game.undo();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return false;
    }
  }, {
    key: "_isBlackInCheck",
    value: function _isBlackInCheck() {
      this.game.setTurn("b");
      var isCheck = this.game.in_check();
      this.game.setTurn("w");
      return isCheck;
    }
  }, {
    key: "_isCastlingPossible",
    value: function _isCastlingPossible() {
      var fen = this.game.fen();
      var fenParts = fen.split(" ");
      var castling = fenParts[2];

      var _iterator11 = _createForOfIteratorHelper(castling),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var ca = _step11.value;
          if (ca == "K" || ca == "Q") return true;
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return false;
    }
  }, {
    key: "_countDefendersOfPiece",
    value: function _countDefendersOfPiece(piece) {
      var value = 0;

      var squares = this._squaresOfPiece(piece);

      var _iterator12 = _createForOfIteratorHelper(squares),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var sq = _step12.value;

          var defenders = this._countSquareDefenders(sq);

          if (defenders >= 1) value += 1;
          if (defenders >= 2) value += 0.5;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return value;
    }
  }, {
    key: "_countSquareDefenders",
    value: function _countSquareDefenders(square) {
      var countPawn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // remove the piece and put an enemy queen here
      var defenders = 0;
      var removedPiece = this.game.remove(square);
      this.game.put({
        type: "q",
        color: "b"
      }, square);

      try {
        var _iterator13 = _createForOfIteratorHelper(this.game.moves({
          verbose: true
        })),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var move = _step13.value;

            if (move.to === square && (move.flags === "c" || move.flags === "e")) {
              if (move.piece.toLowerCase() === "p" && !countPawn) continue;
              defenders++;
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        this.game.remove(square);
        this.game.put(removedPiece, square);
        return defenders;
      } catch (e) {
        console.log("error ", e);
        return 0;
      }
    }
  }, {
    key: "_squaresOfPiece",
    value: function _squaresOfPiece(pieceType) {
      var _this = this;

      return this.game.SQUARES.filter(function (square) {
        var r = _this.game.get(square);

        return r === null ? false : r.color == "w" && r.type.toLowerCase() === pieceType;
      });
    }
  }, {
    key: "_getMaterialValue",
    value: function _getMaterialValue() {
      var B = this._getMaterialValueForColor("b");

      var W = this._getMaterialValueForColor("w");

      return W / B;
    }
  }, {
    key: "_getMaterialValueSub",
    value: function _getMaterialValueSub() {
      var B = this._getMaterialValueForColor("b");

      var W = this._getMaterialValueForColor("w");

      return W - B;
    }
  }, {
    key: "_getMaterialValueForColor",
    value: function _getMaterialValueForColor(color) {
      var value = 0;

      var _iterator14 = _createForOfIteratorHelper(this.game.board()),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var row = _step14.value;

          var _iterator15 = _createForOfIteratorHelper(row),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var sq = _step15.value;
              if (sq === null) continue;

              if (sq.color === color) {
                switch (sq.type) {
                  case "p":
                    value += 1;
                    break;

                  case "r":
                    value += 5;
                    break;

                  case "b":
                    value += 3.5;
                    break;

                  case "q":
                    value += 10;
                    break;

                  case "n":
                    value += 3;
                    break;
                }
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      if (this.game.in_checkmate()) {
        value += 100;
      }

      return value;
    }
  }, {
    key: "_nextChar",
    value: function _nextChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1);
    }
  }]);

  return Turochamp;
}();

var _default = Turochamp;
exports.default = _default;
},{}],"worker.js":[function(require,module,exports) {
"use strict";

var _chess = require("./chess");

var _turochamp = _interopRequireDefault(require("./turochamp/turochamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

onmessage = function onmessage(e) {
  var fen = e.data;
  var game = new _chess.Chess();
  game.load(fen);
  var turochamp = new _turochamp.default(game);
  postMessage(JSON.stringify(turochamp.findNextMove()));
};
},{"./chess":"chess.js","./turochamp/turochamp":"turochamp/turochamp.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65271" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","worker.js"], null)
//# sourceMappingURL=/worker.ab30da2c.js.map