/**
 * Licensed Materials - Property of IBM
 *
 * 5725Z44
 * © Copyright IBM Corp. 2017 All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

'use strict'

const chai = require('chai')
const fs = require('fs')
const expect = chai.expect

const templateMetadata = require('../resources/template-metadata.json')

describe('Template files', function () {
  it('must all exist', function () {
    for (let template of templateMetadata.templates) {
      let fileName = `./resources/${template.name}.yaml`
      expect(fs.existsSync(fileName), `Missing file ${fileName}`).equals(true)
    }
  })
})
