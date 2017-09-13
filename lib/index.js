'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myfn2 = exports.myfn1 = exports.MySub = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MySuper = function () {
  function MySuper() {
    _classCallCheck(this, MySuper);
  }

  _createClass(MySuper, [{
    key: 'timesTwo',
    value: function timesTwo() {
      return this.property * 2;
    }
  }]);

  return MySuper;
}();

var MySub = exports.MySub = function (_MySuper) {
  _inherits(MySub, _MySuper);

  function MySub(value) {
    _classCallCheck(this, MySub);

    var _this = _possibleConstructorReturn(this, (MySub.__proto__ || Object.getPrototypeOf(MySub)).call(this));

    _this.property = value;
    return _this;
  }

  _createClass(MySub, [{
    key: 'plusHundred',
    value: function plusHundred() {
      return this.property + 100;
    }
  }]);

  return MySub;
}(MySuper);

var asyncfn = function _callee() {
  return _regeneratorRuntime2.default.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', 'asyncfn');

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, undefined);
};

var myfn1 = exports.myfn1 = function _callee2(value, which) {
  var asyncstr;
  return _regeneratorRuntime2.default.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!value || typeof value !== 'string')) {
            _context2.next = 2;
            break;
          }

          throw new Error('value must be "string"');

        case 2:
          _context2.next = 4;
          return _regeneratorRuntime2.default.awrap(asyncfn());

        case 4:
          asyncstr = _context2.sent;

          if (!(which === 'prefix')) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt('return', 'myfn1_' + asyncstr + '_' + value);

        case 9:
          if (!(which === 'suffix')) {
            _context2.next = 13;
            break;
          }

          return _context2.abrupt('return', value + '_' + asyncstr + '_myfn1');

        case 13:
          return _context2.abrupt('return');

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, undefined);
};

var myfn2 = exports.myfn2 = function _callee3(value, which) {
  var asyncstr;
  return _regeneratorRuntime2.default.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!value || typeof value !== 'string')) {
            _context3.next = 2;
            break;
          }

          throw new Error('value must be "string"');

        case 2:
          _context3.next = 4;
          return _regeneratorRuntime2.default.awrap(asyncfn());

        case 4:
          asyncstr = _context3.sent;

          if (!(which === 'prefix')) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt('return', 'myfn2_' + asyncstr + '_' + value);

        case 9:
          if (!(which === 'suffix')) {
            _context3.next = 13;
            break;
          }

          return _context3.abrupt('return', value + '_' + asyncstr + '_myfn2');

        case 13:
          return _context3.abrupt('return');

        case 14:
        case 'end':
          return _context3.stop();
      }
    }
  }, null, undefined);
};

// // type MyMethod = <T> () => T;
// interface MySuperInterface {
//     negative(): void
// };
// class MySuperClass implements MySuperInterface {
//     character: string;
//     negative(){
//         console.log(this.character);
//         return undefined;
//     }
// };
//
// // interface MySubInterface {
// //     // who: string,
// //     constructor(who: string): void,
// //     positive(): void
// // }
// class MySubClass extends MySuperClass {
//     character: string;
//     constructor(character){
//         super();
//         this.character = character;
//     }
//     positive(){
//
//     }
// };
//
// type Characters = "akira" | "kaneda" | "kaori";
// const charactersMap: {[name: Characters]: MySubClass} = {
//     akira: new MySubClass("akira"),
//     kaneda: new MySubClass("kaneda"),
//     kaori: new MySubClass("kaori"),
//     // kei: new MySubClass("kei")
// };
// type MyFnSecondArg = {
//
// };
// type MyFn = (name: Characters, options: MyFnSecondArg) => string | void;
//
// const myfn: MyFn = (name,options) => {
//     const value = charactersMap[name];
//     if(!value){
//         throw new Error(`no`);
//     }else{
//
//     }
// }
//
// export default async () => {
//
// }

// import regeneratorRuntime from 'regenerator-runtime'
//
// // export default (name: string, hoge?: boolean, options): void => {
// //   // let result = await prms(num)
// //   // return result;
// //   // return;
// // }
// //
//
// const passedCallback = (cb): void => {}
//
// // export default async (num: ?number) => {
// //   let result = await prms(num)
// //   return result
// // }
//
// const prms = (num: ?number) =>
//   Promise.resolve().then(() => {
//     if (typeof num !== 'number') {
//       let any = String(num)
//       throw new Error(`${any} is not number`)
//     } else {
//       return num * 100
//     }
//   })

// export default options => {}
//
// ;(() => {
//   const whatCount = post => {
//     const span = post.querySelector('.note_link_current'),
//       { count } = span.dataset
//     console.log(count)
//     return Number(count)
//   }
//
//   const posts = Array.from(document.querySelectorAll('.post'))
//     .filter(({ nodeName }) => nodeName === 'ARTICLE')
//     .sort((a, b) => {
//       const countA = whatCount(a),
//         countB = whatCount(b)
//
//       return countA > countB ? -1 : countA < countB ? 1 : 0
//     })
//
//   const mostPopularOne = posts[0]
//   console.log(JSON.parse(mostPopularOne.dataset.json))
// })()
//
// type TestFnArg = {
//   first: string,
//   second: number
// }
//
// type TestFn = (arg: TestFnArg) => number | 'fuck'
//
// const fn: TestFn = arg => {
//   const { first, second } = arg,
//     firstNum = Number(first)
//   if (isNaN(firstNum)) {
//     return 'fuck'
//   } else {
//     return firstNum + second
//   }
// }

// import puppeteer from "puppeteer"
// // うーん、思いつかない。どうゆうコードを書いたらいいのか。
// // 動機がないんだよな。「何をさせたい」が無い。
// // まー、「documentとしてのcode」にしたいというか、
// // ここを見たらFlowの挙動をすぐに思い出せるようなコードにしたい
// // だからtypeofとか&とかGenericとか
// var k = 5;
//
// interface MyInterface {
//     method(value: number): string
// }