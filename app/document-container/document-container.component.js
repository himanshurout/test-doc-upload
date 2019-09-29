'use strict';

function documentContainerController() {
  var ctrl = this;

  ctrl.serologyDoc = {
    columns : [
      {
        "key": "docType",
        "value": "Document Type"
      },
      {
        "key": "files",
        "value": "Document Attached"
      },
      {
        "key": "upload",
        "value": "Attach Document"
      }
    ],
    documentTypes : [
      {
        "docType": "Serology Report"
      }
    ]
  };

  ctrl.consolidatedDoc = {
    columns : [
      {
        "key": "docType",
        "value": "Document Type"
      },
      {
        "key": "files",
        "value": "Document Attached"
      },
      {
        "key": "upload",
        "value": "Attach Document"
      }
    ],
    documentTypes : [
      {
        "docType": "Serology Report - Consolidated"
      }
    ]
  };

  ctrl.additionalDoc = {
    columns : [
      {
        "key": "docType",
        "value": "Document Type"
      },
      {
        "key": "files",
        "value": "Document Attached"
      },
      {
        "key": "initiatedDate",
        "value": "Initiated Date"
      },
      {
        "key": "lapsedDays",
        "value": "Lapsed Days"
      },
      {
        "key": "upload",
        "value": "Attach Document"
      }
    ],
    documentTypes : [
      {
        "docType": "Serology Report",
        "initiatedDate": "07/01/19",
        "lapsedDays": "21"
      }
    ]
  };


}

angular.
  module('documentContainer').
  component('documentContainer', {
    templateUrl: 'document-container/document-container.template.html',
    controller: documentContainerController
  });
