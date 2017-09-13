import assert from 'assert'
import rewire from 'rewire'

const myModules = rewire(`../src/index.js`)

describe(`tetsuo test`, () => {
  describe(`MySub`, () => {
    const { MySub } = myModules
    const value = 10
    const mysub = new MySub(value)

    it(`timesTwo`, () => {
      const result = mysub.timesTwo()
      const expect = value * 2
      assert.deepStrictEqual(result, expect)
    })

    it(`plusHundred`, () => {
      const result = mysub.plusHundred()
      const expect = value + 100
      assert.deepStrictEqual(result, expect)
    })
  })

  describe(`fns`, () => {
    const firstarg = 'firstarg'
    const errorarg = ``
    const expectMessage = `value must be "string"`

    describe(`myfn1`, () => {
      const { myfn1 } = myModules

      it(`throw`, async () => {
        try {
          await myfn1(errorarg)
        } catch (err) {
          assert.deepStrictEqual(err.message, expectMessage)
        }
      })

      it(`prefix`, async () => {
        const result = await myfn1(firstarg, 'prefix')
        const expect = `myfn1_asyncfn_${firstarg}`
        assert.deepStrictEqual(result, expect)
      })

      it(`suffix`, async () => {
        const result = await myfn1(firstarg, 'suffix')
        const expect = `${firstarg}_asyncfn_myfn1`
        assert.deepStrictEqual(result, expect)
      })
      it(`void`, async () => {
        const result = await myfn1(firstarg)
        const expect = undefined
        assert.deepStrictEqual(result, expect)
      })
    })

    describe(`myfn2`, () => {
      const { myfn2 } = myModules

      it(`throw`, async () => {
        try {
          await myfn2(errorarg)
        } catch (err) {
          assert.deepStrictEqual(err.message, expectMessage)
        }
      })

      it(`prefix`, async () => {
        const result = await myfn2(firstarg, 'prefix')
        const expect = `myfn2_asyncfn_${firstarg}`
        assert.deepStrictEqual(result, expect)
      })

      it(`suffix`, async () => {
        const result = await myfn2(firstarg, 'suffix')
        const expect = `${firstarg}_asyncfn_myfn2`
        assert.deepStrictEqual(result, expect)
      })

      it(`void`, async () => {
        const result = await myfn2(firstarg)
        const expect = undefined
        assert.deepStrictEqual(result, expect)
      })
    })

    it(`asyncfn`, async () => {
      const asyncfn = myModules.__get__(`asyncfn`)
      const result = await asyncfn()
      const expect = `asyncfn`
      assert.deepStrictEqual(result, expect)
    })
  })
})

// import regeneratorRuntime from "regenerator-runtime";
// import assert from 'assert'
// import fn from '../src/index.js'
//
// describe(`test`, () => {
//   it(`valid`, async () => {
//     let arg = 5,
//       expect = 500,
//       result = await fn(5)
//     assert.deepStrictEqual(result, expect)
//   })
//
//   it(`invalid`, async () => {
//     let arg = '5'
//     try {
//       await fn(arg)
//     } catch (err) {
//       let expect = `${arg} is not number`
//       assert.deepStrictEqual(err.message, expect)
//     }
//   })
// })
