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
const expect = chai.expect
chai.use(require('chai-json-schema'))

const templateMetadataSchema = require('./schema/template-metadata-schema.json')
const templateMetadata = require('../resources/template-metadata.json')

describe('Template Metadata Schema', function () {
  it('is valid', function () {
    expect(templateMetadata).to.be.jsonSchema(templateMetadataSchema)
  })
})
