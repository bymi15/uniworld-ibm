/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
	return {
	    doc: {
            _id: params._id,
            _rev: params._rev,
            numSlides: params.numSlides,
            title: params.title,
            module: params.module,
            lecturer: params.lecturer,
            startTime: params.startTime,
            endTime: params.endTime,
            firstSlideUrl: params.firstSlideUrl
	    }
	};
}
