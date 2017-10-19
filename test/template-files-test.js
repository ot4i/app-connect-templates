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
const jsonata = require('jsonata')

const templateMetadataFilename = 'template-metadata.json'
const templateMetadata = require('../resources/' + templateMetadataFilename)

describe('Template files', function () {
  it('must all exist for the list in template-metadata', function () {
    for (let template of templateMetadata.templates) {
      let fileName = `./resources/${template.name}.yaml`
      expect(fs.existsSync(fileName), `Missing file ${fileName}`).equals(true)
    }
  })
  it('must all have an entry in template-metadata', function () {
    let flowNames = jsonata('templates.name').evaluate(templateMetadata)
    const listOfFiles = fs.readdirSync('./resources')

    // Remove the templates-metadata.json file from the list we're checking against
    const indexOfMetadata = listOfFiles.indexOf(templateMetadataFilename)
    if (indexOfMetadata > -1) {
      listOfFiles.splice(indexOfMetadata, 1)
    }

    // Iterate through each flow doc name and remove the file extension so can directly compare with the metadata file
    // entries, list any missing ones and fail the test if any are missing
    let missingFlowDocInMetadata = false
    for (var i = 0; i < listOfFiles.length; i++) {
      listOfFiles[i] = listOfFiles[i].substr(0, listOfFiles[i].lastIndexOf('.'))

      if (flowNames.indexOf(listOfFiles[i]) === -1) {
        console.log('This flow document is missing from the template-metadata file: ' + listOfFiles[i])
        missingFlowDocInMetadata = true
      }
    }
    expect(missingFlowDocInMetadata).equals(false)
  })

  it('must have a corresponding markdown file', function () {
    for (let template of templateMetadata.templates) {
      let fileName = `./markdown/${template.name}.md`
      expect(fs.existsSync(fileName), `Missing file ${fileName}`).equals(true)
    }
  })
})
