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
const jsyaml = require('js-yaml')

const MAX_TEMPLATE_COUNT = 350 // Current practical limit for rendering template gallery

const markdownDirectoryName = 'markdown'
const templateMetadataFilename = 'template-metadata.json'
const templateMetadata = require('../resources/' + templateMetadataFilename)

describe('Template files', function () {
  it('must all exist for the list in template-metadata', function () {
    for (const template of templateMetadata.templates) {
      const fileName = `./resources/${template.name}.yaml`
      expect(fs.existsSync(fileName), `Missing file ${fileName}`).equals(true)
    }
  })

  it('template count must be within agreed threshold', function () {
    expect(templateMetadata.templates.length).lessThanOrEqual(MAX_TEMPLATE_COUNT)
  })

  it('must not contain account-name in action or trigger interfaces', function () {
    let noAccountNameFound = true
    for (const template of templateMetadata.templates) {
      const fileName = `./resources/${template.name}.yaml`
      const doc = jsyaml.safeLoad(fs.readFileSync(fileName, 'utf8'))
      const triggerInterfaceAccounts = jsonata('*."trigger-interfaces".*."account-name"').evaluate(doc)
      const actionInterfaceAccounts = jsonata('*."action-interfaces".*."account-name"').evaluate(doc)
      if (triggerInterfaceAccounts !== undefined || actionInterfaceAccounts !== undefined) {
        console.log(`Please remove 'account-name' from the trigger-interfaces or action-interfaces in '${fileName}'`)
        noAccountNameFound = false
      }
    }
    expect(noAccountNameFound, 'Found \'account-name\' in some of the templates, check the logs above!').equal(true)
  })

  it('must all have an entry in template-metadata', function () {
    const flowNames = jsonata('templates.name').evaluate(templateMetadata)
    const listOfFiles = fs.readdirSync('./resources')

    // Remove the templates-metadata.json file from the list we're checking against
    const indexOfMetadata = listOfFiles.indexOf(templateMetadataFilename)
    if (indexOfMetadata > -1) {
      listOfFiles.splice(indexOfMetadata, 1)
    }

    // Remove the markdown directory from the list we're checking against
    const indexOfMarkdownDirectory = listOfFiles.indexOf(markdownDirectoryName)
    if (indexOfMarkdownDirectory > -1) {
      listOfFiles.splice(indexOfMarkdownDirectory, 1)
    }

    // Iterate through each flow doc name and remove the file extension so can directly compare with the metadata file
    // entries, list any missing ones and fail the test if any are missing
    let missingFlowDocInMetadata = false
    for (let i = 0; i < listOfFiles.length; i++) {
      listOfFiles[i] = listOfFiles[i].substr(0, listOfFiles[i].lastIndexOf('.'))

      if (flowNames.indexOf(listOfFiles[i]) === -1) {
        console.log('This flow document is missing from the template-metadata file: ' + listOfFiles[i])
        missingFlowDocInMetadata = true
      }
    }
    expect(missingFlowDocInMetadata).equals(false)
  })

  it('must have a corresponding markdown file', function () {
    for (const template of templateMetadata.templates) {
      const fileName = `./resources/markdown/${template.name}_instructions.md`
      expect(fs.existsSync(fileName), `Missing file ${fileName}`).equals(true)
    }
  })
})
