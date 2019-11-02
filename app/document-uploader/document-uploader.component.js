'use strict';

function documentUploaderController() {
  var ctrl = this;
  ctrl.viewAllComments = function(docObj) {
    console.log(docObj);
  }
}

angular.
  module('documentUploader').
  component('documentUploader', {
    templateUrl: 'document-uploader/document-uploader.template.html',
    controller: documentUploaderController,
    bindings: {
      columns: '<',
      documentTypes: '='
    }
  });
