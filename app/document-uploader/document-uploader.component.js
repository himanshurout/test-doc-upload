'use strict';

// Register `documentUploader` component, along with its associated controller and template
angular.
  module('documentUploader').
  component('documentUploader', {
    templateUrl: 'document-uploader/document-uploader.template.html',
    controller: ['$routeParams',
      function documentUploaderController($routeParams, Phone) {
        var self = this;
        self.columns = [
          {
            "key": "docType",
            "value": "Document Type"
          },
          {
            "key": "files",
            "value": "Document Attached"
          },{
            "key": "date",
            "value": "Date"
          },
          {
            "key": "date2",
            "value": "Date2"
          },
          {
            "key": "upload",
            "value": "Attach Document"
          }
        ];


        self.documentTypes = [
          {
            "docType": "Initial",
            "date": "10/10/2019",
            "date2": "17/10/2019"
          },
          {
            "docType": "Attached",
            "date": "10/10/2019"
          },
          {
            "docType": "xyz",
            "date": "10/10/2019"
          }
        ];
      }
    ]
  });
